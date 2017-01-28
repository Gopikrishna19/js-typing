const Registry = require("./Registry");
const IPerson = require("./IPerson");

const registry = new Registry();

registry.addPerson({
  age: 12,
  name: 'Gopi'
});

registry.addPerson({
  age: 13,
  name: 'Prasanna'
});

console.log(registry.getPerson(0));
console.log(registry.getPerson(1));

registry.listPersons();
