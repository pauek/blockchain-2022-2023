const sum2_normal = (a, b) => a + b;

const sum2_promise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Values have to be positive or zero");
    } else {
      setTimeout(() => resolve(a + b), 1000);
    }
  });
};

sum2_promise(10, 20).then((value) => {
  console.log("La suma es", value);
});

sum2_promise(-5, 7)
  .then((value) => {
    console.log("La suma es", value);
  })
  .catch((razon) => {
    console.error("sum2_promise ha fallado", razon);
  });

console.log("Se acaba el main");
