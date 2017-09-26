const baseUrl = 'https://ec2-34-235-224-79.compute-1.amazonaws.com/openmrs/ws/rest/v1'
const headers = { Authorization: `Basic `+Buffer.from('Superman:Admin123').toString('base64') };

let remote = {
  baseUrl,
  headers,
  getAllRemoteConcepts: {
    method: 'GET',
    headers,
    url: `${baseUrl}/concept`,
    json: true
  },
  getRemoteConcept(uuid) {
    return getRemoteConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${uuid}`,
      json: true
    };
  },
  postRemoteConcept(json) {
    return postRemoteConcept = {
      method: 'POST',
      headers,
      url: `${baseUrl}/concept`,
      json
    };
  },
  getRemoteConceptParentName(uuid) {
    return getRemoteConceptParentName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json: true
    };
  },
  postRemoteConceptParentName(uuid,nameConcept) {
    return postRemoteConceptParentName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json:nameConcept
    };
  },
  getRemoteConceptParentAndChildName(parent, child) {
    return getRemoteConceptParentAndChildName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  postRemoteConceptParentAndChildName(parent, child) {
    return postRemoteConceptParentAndChildName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  getRemoteSystemSettings: {
    method: 'GET',
    headers,
    url: `${baseUrl}/systemsetting`,
    json: true
  },
  getRemoteSystemSetting(uuid) {
    return getRemoteConcept = {
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
  remote
};
