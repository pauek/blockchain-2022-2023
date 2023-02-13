
const fs = require('fs');

fs.readFile('./datos.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('./datos-copy.txt', data.toString(), (err) => {
      if (err) {
        console.error(err);
        console.log("todo ok.");
      }
    });
  }
});

console.log("He acabado");