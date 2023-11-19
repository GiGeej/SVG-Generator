// Circle
class Circle {
  constructor(radius, textColor, shapeColor) {
    this.radius = radius;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  generateSvg() {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
  }
}

module.exports = Circle;

// Square
class Square {
  constructor(sideLength, textColor, shapeColor) {
    this.sideLength = sideLength;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  generateSvg() {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
  }
}

module.exports = Square;

// Triangle
class Triangle {
  constructor(sideLength, textColor, shapeColor) {
    this.sideLength = sideLength;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  generateSvg() {
    const halfHeight = (Math.sqrt(3) / 2) * this.sideLength;

    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,0 300,${halfHeight * 2} 0,${
      halfHeight * 2
    }" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
            this.textColor
          }">${this.text}</text>
        </svg>
      `;
  }
}

module.exports = Triangle;
