import {Registry} from "./Registry";
import {IPerson} from "./IPerson";

const registry = new Registry();

registry.addPerson({
  age: 12,
  name: 'Gopi'
} as IPerson);

registry.addPerson({
  age: 13,
  name: 'Prasanna'
} as IPerson);

console.log(registry.getPerson(0));
console.log(registry.getPerson(1));

registry.listPersons();
