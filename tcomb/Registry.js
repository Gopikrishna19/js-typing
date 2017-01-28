const IPerson = require("./IPerson");
const t = require('tcomb');

const PersonArray = t.list(IPerson);

class Registry {

  constructor() {
    this.registry = PersonArray([]);
  }

  addPerson(person) {
    this.registry = PersonArray.update(this.registry, {
      $push: [person]
    });
  }

  getPerson(index) {
    return IPerson(this.registry[index]);
  }

  listPersons() {
    this.registry.forEach(person => console.log(person));
  }
}

module.exports = Registry;
