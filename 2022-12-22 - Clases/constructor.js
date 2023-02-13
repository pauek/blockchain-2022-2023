let Figure = {
  area() { return this.width * this.height; }
}

function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  // Esto se hace automáticamente:
  // this.__proto__ = Rectangle.prototype
}
Rectangle.prototype = Figure;

const makeRect = (x, y, width, height) => {
  return { x, y, width, height };
}

let r1 = new Rectangle(0, 0, 100, 80);
console.log(r1);
console.log({ x: 0, y: 0, width: 100, height: 80 });
console.log(makeRect(0, 0, 100, 80));

// console.log(r1.__proto__);
// console.log({}.__proto__);
// console.log(makeRect(0, 0, 100, 80).__proto__);

console.log(r1.area());