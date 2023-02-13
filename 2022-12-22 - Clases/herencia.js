
function Animal() {
  this.type = "animal";
}
Animal.prototype.walk = function () {
  console.log(`A ${this.type} is walking`);
}

function Dinosaur() {
  this.type = "dinosaur";
}
Dinosaur.prototype.talk = function () {
  console.log("Roar");
}
Dinosaur.prototype.__proto__ = Animal.prototype;

let d = new Dinosaur();
d.walk();