const fs = require("fs");

// Class definition for a Circle shape
class Circle {
  // Constructor to initialize Circle properties
  constructor(radius, textColor, shapeColor, text) {
    this.radius = radius;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  // Method to generate SVG content and write it to a file
  generateSvg(fileName) {
    // SVG content for a circle
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;

    // Write SVG content to a file
    fs.writeFileSync(fileName, svgContent);

    // Log a message indicating that the SVG file has been generated
    console.log(`SVG file generated: ${fileName}`);
  }
}

// Class definition for a Square shape
class Square {
  // Constructor to initialize Square properties
  constructor(sideLength, textColor, shapeColor, text) {
    this.sideLength = sideLength;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  // Method to generate SVG content and write it to a file
  generateSvg(fileName) {
    // SVG content for a square
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;

    // Write SVG content to a file
    fs.writeFileSync(fileName, svgContent);

    // Log a message indicating that the SVG file has been generated
    console.log(`SVG file generated: ${fileName}`);
  }
}

// Class definition for a Triangle shape
class Triangle {
  // Constructor to initialize Triangle properties
  constructor(sideLength, textColor, shapeColor, text) {
    this.sideLength = sideLength;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  // Method to generate SVG content and write it to a file
  generateSvg(fileName) {
    // Calculate half height of the equilateral triangle
    const halfHeight = (Math.sqrt(3) / 2) * this.sideLength;

    // SVG content for a triangle
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,0 300,${halfHeight * 2} 0,${
      halfHeight * 2
    }" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
            this.textColor
          }">${this.text}</text>
        </svg>
      `;

    // Write SVG content to a file
    fs.writeFileSync(fileName, svgContent);

    // Log a message indicating that the SVG file has been generated
    console.log(`SVG file generated: ${fileName}`);
  }
}

// Export the shapes classes for external use
module.exports = { Circle, Square, Triangle };
