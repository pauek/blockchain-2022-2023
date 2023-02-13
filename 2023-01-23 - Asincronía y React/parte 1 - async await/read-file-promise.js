const fs = require("fs/promises");

fs.readFile("datos.txt").then((buffer) => {
  console.log("El contenido es", buffer.toString());
});

console.log("El main ha acabado");
