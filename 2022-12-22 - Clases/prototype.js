
let person = {
  name: "James",
  lastName: "Bond",
  sayHi: function () {
    console.log(`Hi, I'm ${this.name} (lastname = ${this.lastName})`);
  }
};
let agent = {
  num: "007",
  name: "Jamie",
  __proto__: person,
};

agent.sayHi();
