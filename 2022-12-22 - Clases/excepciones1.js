function bum(obj) {
  throw new Error("Un error que me he inventao ahora");
}

function intermedia() {
  let a = 3;
  bum(a);
}

try {
  intermedia();
} catch (e) {
  console.log("Ha habido un error");
  console.error(`El error es: ${e}`);
  console.error(`El name es ${e.name}`);
  switch (e.name) {
    case 'TypeError': {
      console.log("Es un TypeError");
      break;
    }
    default: {
      console.log("Es otra cosa");
      break;
    }
  }
}
