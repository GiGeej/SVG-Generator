const fs = require("fs");
const { execSync } = require("child_process");
const { Circle, Square, Triangle } = require("./shapes");

describe("SVG generation and display tests", () => {
  const fileName = "logo.svg";

  // Cleanup function to delete the SVG file after tests
  afterAll(() => {
    try {
      fs.unlinkSync(fileName);
    } catch (error) {
      console.error("Error deleting SVG file:", error.message);
    }
  });

  test("Generated Circle SVG should match criteria", () => {
    const circle = new Circle(50, "black", "red", "ABC");
    circle.generateSvg(fileName);

    // Check if the SVG file exists
    expect(fs.existsSync(fileName)).toBe(true);

    // Open the SVG file in a browser for manual verification
    execSync(`open ${fileName}`);
  });

  test("Generated Square SVG should match criteria", () => {
    const square = new Square(50, "black", "green", "123");
    square.generateSvg(fileName);

    // Check if the SVG file exists
    expect(fs.existsSync(fileName)).toBe(true);

    // Open the SVG file in a browser for manual verification
    execSync(`open ${fileName}`);
  });

  test("Generated Triangle SVG should match criteria", () => {
    const triangle = new Triangle(50, "black", "blue", "XYZ");
    triangle.generateSvg(fileName);

    // Check if the SVG file exists
    expect(fs.existsSync(fileName)).toBe(true);

    // Open the SVG file in a browser for manual verification
    execSync(`open ${fileName}`);
  });
});
