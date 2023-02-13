
let x = 3;

function f1() {
  console.log(x);
  let a = 70;
  const f2 = () => {
    a++;
    x += a;
    return a;
  }
  let c = f2();
  return c;
}

console.log(f1());
console.log(x);