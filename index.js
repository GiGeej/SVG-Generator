// Import necessary modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Function to prompt the user for input using inquirer
async function promptUser() {
  // Ask the user for input with specific prompts
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (value) => value.length <= 3, // Validate that the input length is at most three characters
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexadecimal):",
    },
  ]);

  return userInput; // Return the user's input
}

// Main function to orchestrate the program
async function main() {
  // Get user input using the promptUser function
  const userInput = await promptUser();
  const fileName = "logo.svg"; // Define the file name for the generated SVG

  // Based on the chosen shape, create an instance and generate the SVG
  switch (userInput.shape) {
    case "circle":
      new Circle(
        50,
        userInput.textColor,
        userInput.shapeColor,
        userInput.text
      ).generateSvg(fileName);
      break;
    case "square":
      new Square(
        50,
        userInput.textColor,
        userInput.shapeColor,
        userInput.text
      ).generateSvg(fileName);
      break;
    case "triangle":
      new Triangle(
        50,
        userInput.textColor,
        userInput.shapeColor,
        userInput.text
      ).generateSvg(fileName);
      break;
    default:
      console.log("Invalid shape");
      return;
  }

  console.log(`Generated ${fileName}`); // Log a message indicating that the SVG file has been generated
}

// Call the main function to start the program
main();
