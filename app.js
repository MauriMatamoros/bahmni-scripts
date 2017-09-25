const request = require('request');

const { openmrsApi } = require('./openmrsApiCalls');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

request(openmrsApi.postLocalConcept, {form: {
  "set": "",
  "answers": "",
  "lowNormal": "",
  "lowCritical": "",
  "units": "",
  "allowDecimal": "",
  "descriptions": "First Post Script",
  "version": "",
  "mappings": "",
  "names": "PostTest",
  "displayPrecision": "",
  "datatype": "Text",
  "lowAbsolute": "",
  "conceptClass": "Misc",
  "setMembers": "",
  "hiAbsolute": "",
  "hiNormal": "",
  "hiCritical": ""
}});

// request(openmrsApi.getAllLocalConcepts, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   let counter  = 0;
//   let concepts = body.results;
//   concepts.forEach((concept) => {
//     console.log(concept.uuid);
//     console.log(concept.display);
//     counter++;
//   });
//   console.log(counter);
// });

// let uuid = 'c393fd1d-3f10-11e4-adec-0800271c1b75';
//
// request(openmrsApi.getLocalConcept(uuid), (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(body);
// });

// request(openmrsApi.getLocalSystemSettings, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   let results = body.results;
//   results.forEach((result) => {
//     console.log(result);
//   })
// });

// let uuid = '47ba7340-88b0-4784-a305-0a935f53d96d';
// request(openmrsApi.getLocalSystemSetting(uuid), (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(body);
// });
