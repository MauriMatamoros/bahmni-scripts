const request = require('request');
const rpn = require('request-promise-native');
const _ = require('lodash');

const { localOpenmrs } = require('./api/local/localApiCalls');
const { remoteOpenmrs } = require('./api/remote/remoteApiCalls');
const { handlers } = require('./assets/handlers');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let basicConcept  = {
  "set": null,
  "display": null,
  "answers": null,
  "descriptions": null,
  "datatype": null,
  "conceptClass": null,
  "retired": false
}

let nameConcept = {
  "display": null,
  "name": null,
  "localePreferred": null,
  "locale": null,
  "conceptNameType": null
}

let promises = [];
let localResults = [];
let remoteResults = [];

rpn(localOpenmrs.getAllConcepts).then((response) => {
  localResults = response.results
  rpn(remoteOpenmrs.getAllConcepts).then((response) => {
    remoteResults = response.results
    let conceptsMissing = _.differenceBy(localResults, remoteResults, 'display');
    conceptsMissing.forEach((concept) => {
      promises.push(rpn(localOpenmrs.getConcept(concept.uuid)));
    });
    return Promise.all(promises);
  }).then((concepts) => {
    concepts.forEach((concept) => {
      handlers.createBasicConcept(basicConcept, concept)
      rpn(remoteOpenmrs.postConcept(basicConcept)).then((response) =>{
        handlers.createNameConcept(nameConcept, concept);
        rpm(remoteOpenmrs.postConceptParentName(response.uuid, nameConcept)).then((response) => {
          console.log('success');
        });
      });
    });
  });
});
