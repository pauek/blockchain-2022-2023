function ponNombre(x, nombre) {
  x.name = nombre;
}

let obj = {
  a: 1,
  b: true,
  c: "hola",
};
ponNombre(obj, "Faustino");
console.log(obj);
