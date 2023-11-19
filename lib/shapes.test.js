// shapes.test.js
const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("generateSvg produces correct SVG", () => {
    const circle = new Circle(50, "black", "red");
    const expectedSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">Sample Text</text>
      </svg>
    `;
    expect(circle.generateSvg()).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("generateSvg produces correct SVG", () => {
    const square = new Square(50, "white", "blue");
    const expectedSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" fill="blue" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">Sample Text</text>
      </svg>
    `;
    expect(square.generateSvg()).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("generateSvg produces correct SVG", () => {
    const triangle = new Triangle(50, "black", "green");
    const halfHeight = (Math.sqrt(3) / 2) * 50;
    const expectedSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 300,${halfHeight * 2} 0,${
      halfHeight * 2
    }" fill="green" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">Sample Text</text>
      </svg>
    `;
    expect(triangle.generateSvg()).toEqual(expectedSvg);
  });
});
