const baseUrl = 'https://192.168.33.10/openmrs/ws/rest/v1';
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
  getLocalConcept(uuid) {
    return getLocalConcept = {
      method: 'GET',
      headers,
      url: `${baseUrl}/concept/${uuid}`,
      json: true
    };
  },
  postLocalConcept: {
    method: 'POST',
    headers,
    url: `${baseUrl}/concept`
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
  }
};

module.exports = {
  openmrsApi
};
