const request = require('request');
const rpn = require('request-promise-native');

const { openmrsApi } = require('./openmrsApiCalls');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let uuid = '34e7c04c-914c-445e-a077-47e9da53304b';
rpn(openmrsApi.getLocalConcept(uuid)).then((response) => {
  let concept = JSON.stringify(response);
  openmrsApi.postLocalConcept.json = concept;
  rpn(openmrsApi.getLocalConcept).then((response) => {
    console.log(response);
  });
});
