const request = require('request');
const rpn = require('request-promise-native');

const { local } = require('./api/local/localApiCalls');
const { remote } = require('./api/remote/remoteApiCalls');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let uuid = '47db29dc-4992-4c16-804b-1f5e4f33b36c';
rpn(local.getConcept(uuid)).then((response) => {
  console.log(response);
})
