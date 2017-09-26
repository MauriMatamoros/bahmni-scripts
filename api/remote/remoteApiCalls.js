const baseUrl = 'https://ec2-34-235-224-79.compute-1.amazonaws.com/openmrs/ws/rest/v1'
const headers = { Authorization: `Basic `+Buffer.from('Superman:Admin123').toString('base64') };

let remoteOpenmrs = {
  baseUrl,
  headers,
  getAllConcepts: {
    method: 'GET',
    headers,
    url: `${baseUrl}/concept`,
    json: true
  },
  getConcept(uuid) {
    return getConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${uuid}`,
      json: true
    };
  },
  postConcept(json) {
    return postConcept = {
      method: 'POST',
      headers,
      url: `${baseUrl}/concept`,
      json
    };
  },
  getConceptParentName(uuid) {
    return getConceptParentName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json: true
    };
  },
  postConceptParentName(uuid,nameConcept) {
    return postConceptParentName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/${uuid}/name`,
      json:nameConcept
    };
  },
  getConceptParentAndChildName(parent, child) {
    return getConceptParentAndChildName = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  postConceptParentAndChildName(parent, child) {
    return postConceptParentAndChildName = {
      method: 'POST',
      headers,
      url: `${baseUrl}/concept/${parent}/name/${child}`,
      json: true
    };
  },
  getSystemSettings: {
    method: 'GET',
    headers,
    url: `${baseUrl}/systemsetting`,
    json: true
  },
  getSystemSetting(uuid) {
    return getConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/systemsetting/${uuid}`,
      json: true
    };
  }
};

module.exports = {
  remoteOpenmrs
};
