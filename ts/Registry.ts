import {IPerson} from "./IPerson";

export class Registry {
  private registry: IPerson[];

  constructor() {
    this.registry = [];
  }

  public addPerson(person: IPerson): void {
    this.registry.push(person);
  }

  public getPerson(index: number): IPerson {
    return this.registry[index];
  }

  public listPersons() {
    this.registry.forEach(person => console.log(person));
  }
}
