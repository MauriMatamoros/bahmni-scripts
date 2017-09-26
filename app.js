const request = require('request');
const rpn = require('request-promise-native');

const { localOpenmrs } = require('./api/local/localApiCalls');
const { remoteOpenmrs } = require('./api/remote/remoteApiCalls');
const { handlers } = require('./methods/methods');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let staticConcept = {
    "uuid": "47db29dc-4992-4c16-804b-1f5e4f33b36c",
    "display": "cama",
     "name": {
        "display": "camasWWW",
        "uuid": "93efa0e4-2799-402f-a57b-09401fc2f7d9",
        "name": "camaWW",
        "locale": "es",
        "localePreferred": true,
        "conceptNameType": "FULLY_SPECIFIED",
        "links": [
            {
                "rel": "self",
                "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c/name/93efa0e4-2799-402f-a57b-09401fc2f7d9"
            },
            {
                "rel": "full",
                "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c/name/93efa0e4-2799-402f-a57b-09401fc2f7d9?v=full"
            }
        ],
        "resourceVersion": "1.9"
    },
    "datatype": {
        "uuid": "8d4a4ab4-c2cc-11de-8d13-0010c6dffd0f",
        "display": "Text",
        "links": [
            {
                "rel": "self",
                "uri": "http://192.168.33.10/openmrs/ws/rest/v1/conceptdatatype/8d4a4ab4-c2cc-11de-8d13-0010c6dffd0f"
            }
        ]
    },
    "conceptClass": {
        "uuid": "8d492774-c2cc-11de-8d13-0010c6dffd0f",
        "display": "Misc",
        "links": [
            {
                "rel": "self",
                "uri": "http://192.168.33.10/openmrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"
            }
        ]
    },
     "version": null,
    "retired": false,
    "names": [
        {
            "uuid": "b845803e-d3ee-4a74-8790-8390a8f12da5",
            "display": "HH",
            "links": [
                {
                    "rel": "self",
                    "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c/name/b845803e-d3ee-4a74-8790-8390a8f12da5"
                }
            ]
        },
        {
            "uuid": "e421e517-6500-4229-bdc2-4f2a55fc7894",
            "display": "bedio",
            "links": [
                {
                    "rel": "self",
                    "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c/name/e421e517-6500-4229-bdc2-4f2a55fc7894"
                }
            ]
        }
    ],
    "descriptions": [],
    "mappings": [],
    "answers": [],
    "setMembers": [],
    "links": [
        {
            "rel": "self",
            "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c"
        },
        {
            "rel": "full",
            "uri": "http://192.168.33.10/openmrs/ws/rest/v1/concept/47db29dc-4992-4c16-804b-1f5e4f33b36c?v=full"
        }
    ],
    "resourceVersion": "1.9"
  }
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
  handlers.createBasicConcept(basicConcept,staticConcept);
  
  rpn(localOpenmrs.postConcept(basicConcept)).then((response) => {
    handlers.createNameConcept(nameConcept, staticConcept);
    rpn(localOpenmrs.postConceptParentName(response.uuid, nameConcept)).then((response) => {             
    }).catch(error => {
      console.log(error.response.body.error.message);
    }); 
   
  });

