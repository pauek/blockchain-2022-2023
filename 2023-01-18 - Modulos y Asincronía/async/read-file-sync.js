
const fs = require('fs');

const data = fs.readFileSync('./datos.txt');
console.log("Datos = ", data.toString());

console.log("He acabado");