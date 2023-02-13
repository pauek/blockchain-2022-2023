
function sayHi() {
  console.log(
    `My name is ${this.lastName}, ${this.name} ${this.lastName}`
  );
}

let person = {
  name: 'James',
  lastName: 'Bond',
}

let sayHiBound = sayHi.bind(person);
sayHiBound();