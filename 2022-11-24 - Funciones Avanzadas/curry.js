
const add2 = (a, b) => a + b;
const add2c = a => b => a + b;

function f_add2c(a) {
  return function (b) {
    return a + b;
  }
}

console.log(add2(10, 7));
let parcial = add2c(10);
console.log(parcial(7));