let person = {
  name: 'James',
  lastName: 'Bond',
  sayHi: () => {
    console.log(
      `My name is ${this.lastName}, ${this.name} ${this.lastName}`
    );
  }
}

person.sayHi();