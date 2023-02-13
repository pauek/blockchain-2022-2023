
class Person {
  static population = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Person.population++;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.firstName}`);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newFullName) {
    const [first, last] = newFullName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }

  static fromJSON(jsonSrc) {
    const { firstName, lastName } = JSON.parse(jsonSrc);
    return new Person(firstName, lastName);
  }
}

let p = new Person("Paco", "García");
p.firstName = "Francisco";
// console.log(p.fullName);

p.fullName = `Paquito Garsía`;
console.log(p);

let q = Person.fromJSON(`
{
  "firstName": "James",
  "lastName": "Bond"
}`);
console.log(q);
console.log(Person.population);
