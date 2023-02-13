let obj = {
  "de pila": "James",
  lastname: "Bond",
  age: 51,
};
obj["de pila"] = "James"; // obj.name = "James";
obj["lastname"] = "Bond"; // obj.lastname = "Bond";
obj["age"] = 51; // obj.age = 51

let campos = ["de pila", "lastname", "age"];
for (let i = 0; i < campos.length; i++) {
  console.log(campos[i], obj[campos[i]]);
}

console.log(obj);
