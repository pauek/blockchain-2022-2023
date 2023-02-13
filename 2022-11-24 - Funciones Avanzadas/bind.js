
let person = {
  name: 'James',
  lastName: 'Bond',
  sayHi: function () {
    console.log(
      `My name is ${this.lastName}, ${this.name} ${this.lastName}`
    );
  }
}

let sayHiUnbound = person.sayHi;
let sayHiBound = sayHiUnbound.bind(person);
sayHiBound();