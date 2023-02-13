
const fs = require('fs');

fs.readFile('./datos.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Datos = ", data.toString());
  }
});

console.log("He acabado");