
let methods = {
  createBasicConcept(basicConcept, concept) {
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
  createNameConcept(nameConcept, concept) {
    nameConcept.display = concept.name.display;
    nameConcept.localePreferred = concept.name.localePreferred;
    nameConcept.locale = concept.name.locale;
    nameConcept.conceptNameType = concept.name.conceptNameType;
    nameConcept.name = concept.name.name;
  }
};

module.exports = {
  methods
};
