# SVG Generator

A simple Node.js application that generates SVG files based on user input for creating circles, squares, and triangles.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Shapes](#shapes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

The SVG Generator is a Node.js application that prompts users to input details such as text, text color, shape type, and shape color. It then generates SVG files for circles, squares, or triangles based on the provided information. The generated SVG files are saved with the name `logo.svg`.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies

   ```
   cd svg-generator
   ```

   ```
   npm install
   ```

## Usage

1. Run the application

   ```
   npm start

   ```

2. Follow the prompts to enter text, text color, shape type, and shape color.

3. The generated SVG file will be saved as logo.svg in the root directory.

## Shapes

Circle

Constructor

```
new Circle(radius, textColor, shapeColor, text);
```

Example

```
const circle = new Circle(50, 'black', 'red', 'ABC');
circle.generateSvg('logo.svg');

```

Square

Constructor

```

new Square(sideLength, textColor, shapeColor, text);
```

Example

```
const square = new Square(50, 'black', 'green', '123');
square.generateSvg('logo.svg');

```

Triangle

Constructor

```
new Triangle(sideLength, textColor, shapeColor, text);

```

Example

```
const triangle = new Triangle(50, 'black', 'blue', 'XYZ');
triangle.generateSvg('logo.svg');

```

## Testing

The application uses Jest for testing. Run tests with:

```
npm test

```

# Contributing

Contributions are welcome! Please check the Contribution Guidelines for details.

## Repository URL

https://github.com/GiGeej/SVG-Generator

## Application demo

https://drive.google.com/file/d/1I6XgktJT5dVS3wS-KGGAAdh7XlWhbNFx/view

## License

This project is licensed under the MIT License.
