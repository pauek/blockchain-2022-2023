let animal = {
  walk() { console.log(`A ${this.type} is walking`); },
  type: "animal"
};
let dinosaur = {
  talk() { console.log("Roar"); },
  type: "dinosaur",
  __proto__: animal,
};
let trex = {
  hunt() { console.log("Hunting you!"); },
  type: "trex",
  __proto__: dinosaur,
}
let brontosaurus = {
  __proto__: dinosaur,
}

trex.age = 5;
console.log(trex, dinosaur, animal);
trex.walk();
trex.talk();
trex.hunt();