let Person = function (_name, _lastName) {
  this.name = _name;
  this.lastName = _lastName;
};

Person.prototype.printName = function () {
  console.log("Name: " + this.name + " " + this.lastName);
};

Person.prototype.printNameArrow = () => {
  console.log("Name: " + this.name + " " + this.lastName);
};

let personObj = new Person("Daniel", "Gimenez");
personObj.printName();
personObj.printNameArrow();

setTimeout(() => personObj.printName(), 3000);
setTimeout(personObj.printNameArrow, 6000);


let obj1 = {
  a: 1,
};

let obj2 = {
  b: 15,
  __proto__: obj1
};

