
let funcs = {};
for (let i = 0; i < 100; i++) {
  let x = i;
  funcs[`f${i}`] = () => x;
  // funcs.f0 = () => 0
}

console.log(funcs);

module.exports = funcs;
