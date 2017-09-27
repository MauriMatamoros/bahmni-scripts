
let handlers = {
  createBasicConcept(basicConcept, concept) {
    basicConcept.set = concept.set;
    basicConcept.display = concept.display;
    basicConcept.answers = concept.answers;
    basicConcept.descriptions = concept.descriptions;
    basicConcept.datatype = concept.datatype.uuid;
    basicConcept.conceptClass = concept.conceptClass.uuid;
    basicConcept.names = [{"conceptNameType":"FULLY_SPECIFIED","locale":"en","name":concept.names[0].display}];
    basicConcept.retired = concept.retired;
    basicConcept.setMembers = concept.setMembers;
  },
  createNameConcept(nameConcept, concept) {
    nameConcept.display = concept.name.display;
    nameConcept.localePreferred = concept.name.localePreferred;
    nameConcept.locale = concept.name.locale;
    nameConcept.conceptNameType = concept.name.conceptNameType;
    nameConcept.name = concept.name.name;
  }
};

module.exports = {
  handlers
};
