const baseUrl = 'https://192.168.33.10/openmrs/ws/rest/v1';
const remoteUrl = 'https://ec2-34-235-224-79.compute-1.amazonaws.com/openmrs/ws/rest/v1'
const headers = { Authorization: `Basic `+Buffer.from('Superman:Admin123').toString('base64') };

let openmrsApi = {
  baseUrl,
  headers,
  getAllLocalConcepts: {
    method: 'GET',
    headers,
    url: `${baseUrl}/concept`,
    json: true
  },
  getAllRemoteConcepts:{
    method: 'GET',
    headers,
    url: `${remoteUrl}/concept`,
    json: true
  },
  getLocalConcept(uuid) {
    return getLocalConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${uuid}`,
      json: true
    };
  },
  postLocalConcept(json) {
    return postLocalConcept = { 
      method: 'POST',
      headers,
      url: `${baseUrl}/concept`,
      json
    }; 
  },
  getLocalConceptParentName(uuid) {
    return getLocalConceptParentName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json: true
    };
  },
  postLocalConceptParentName(uuid,nameConcept) {
    return postLocalConceptParentName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json:nameConcept
    };
  },
  getLocalConceptParentAndChildName(parent, child) {
    return getLocalConceptParentAndChildName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  postLocalConceptParentAndChildName(parent, child) {
    return postLocalConceptParentAndChildName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  getLocalSystemSettings: {
    method: 'GET',
    headers,
    url: `${baseUrl}/systemsetting`,
    json: true
  },
  getLocalSystemSetting(uuid) {
    return getLocalConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/systemsetting/${uuid}`,
      json: true
    };
  },
   createBasicConcept(basicConcept,concept){
      basicConcept.set = concept.set;
      basicConcept.display = concept.display;
      basicConcept.answers = concept.answers;
      basicConcept.descriptions = concept.descriptions;
      basicConcept.datatype = "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f";
      basicConcept.conceptClass = "8d4918b0-c2cc-11de-8d13-0010c6dffd0f";
      basicConcept.names = [{"conceptNameType":"FULLY_SPECIFIED","locale":"en","name":concept.names[0].display}];
      basicConcept.retired = concept.retired;
      basicConcept.setMembers = concept.setMembers;
   
  },
   createNameConcept(nameConcept,concept){
      nameConcept.display = concept.name.display;
      nameConcept.localePreferred = concept.name.localePreferred;
      nameConcept.locale = concept.name.locale;
      nameConcept.conceptNameType = concept.name.conceptNameType;
      nameConcept.name = concept.name.name;
   }
};

module.exports = {
  openmrsApi
};
