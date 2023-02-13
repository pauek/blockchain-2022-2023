let funciones = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a * b;
  },
  function (a, b) {
    return a - b;
  },
];

for (let i = 0; i < funciones.length; i++) {
  console.log(funciones[i](10, 20));
}
