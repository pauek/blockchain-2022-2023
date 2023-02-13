
class Animal {
  constructor() {
    this.type = "animal";
  }
  walk() {
    console.log(`A ${this.type} is walking`);
  }
}

class Dinosaur extends Animal {
  constructor() {
    super();
    this.type = "dinosaur";
  }
  talk() {
    console.log("Roar");
  }
}

let d = new Dinosaur();
d.walk();