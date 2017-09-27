const request = require('request');
const rpn = require('request-promise-native');

const { localOpenmrs } = require('./api/local/localApiCalls');
const { remoteOpenmrs } = require('./api/remote/remoteApiCalls');
const { handlers } = require('./methods/methods');

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

  rpn(localOpenmrs.getAllConcepts).then((response) => {
      let allLocalConcepts = response;
      rpn(remoteOpenmrs.getAllConcepts).then((response) => {
          let allRemoteConcepts = response;
      });
  }); 
   

