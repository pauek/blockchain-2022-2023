
let person = {
  name: 'James',
  lastName: 'Bond',
  sayHi: function () {
    console.log(
      `My name is ${this.lastName}, ${this.name} ${this.lastName}`
    );
  }
}

person.sayHi(); // Aquí hay un objeto a la izquierda

person.name = "Gustavo";
person.lastName = "Torrente";
person.sayHi(); // Aquí hay un objeto a la izquierda

const sayHiStandalone = person.sayHi;
sayHiStandalone(); // Aquí NO hay un objeto a la izquierda

