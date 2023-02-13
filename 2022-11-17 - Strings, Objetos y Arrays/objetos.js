let obj1 = {
  nombre: "James",
  apellido: "Bond",
  edad: 51,
};
obj1.apellido = "Bound";
let obj2 = {
  nombre: {
    de_pila: 'Faustino',
    apellido1: 'García',
    apellido2: 'Pérez',
  },
  valor: 100000,
};
obj2.nombre.de_pila = "Fausto";
delete obj2.nombre.apellido2;
let obj3 = {
  persona: obj1,
  casado: false,
}
obj3.casado = true;

console.log(obj1);
console.log(obj2);
console.log(obj3);
