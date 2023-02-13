
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

let c1 = new Circle(0, 1, 10);
console.log(c1.area());