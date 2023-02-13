
const max2 = (a, b) => {
  if (a > b) return a;
  else return b;
}

const max2cb = (a, b, fn) => {
  if (a > b) { fn(a); }
  else fn(b);
}

const tmp = max2(10, 20);
const res = max2(30, tmp);
console.log(res);

max2cb(10, 20, (tmp) => {
  max2cb(30, tmp, (res) => {
    console.log(res);
  });
});


