// const fs = require("fs");
// const inquirer = require("inquirer");
// const { createCanvas } = require("canvas");
// const { Triangle, Circle, Square } = require("./shape");

// async function promptUser(questions) {
//   const answers = await inquirer.prompt(questions);
//   return answers;
// }

// function generateSVG(text, textColor, shape, shapeColor) {
//   const canvas = createCanvas(300, 200);
//   const ctx = canvas.getContext("2d");

//   const shapeObject = createShapeObject(shape);
//   shapeObject.setColor(shapeColor);
//   shapeObject.setText(text);

//   ctx.fillStyle = shapeObject.color;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = textColor;
//   ctx.font = "30px Arial";
//   ctx.textAlign = "center";
//   ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 10);

//   const svg = shapeObject.render();
//   fs.writeFileSync("logo.svg", svg);

//   console.log("Generated logo.svg");
// }

// function createShapeObject(shape) {
//   switch (shape) {
//     case "circle":
//       return new Circle();
//     case "triangle":
//       return new Triangle();
//     case "square":
//       return new Square();
//     default:
//       throw new Error("Invalid shape");
//   }
// }

// async function run() {
//   const questions = [
//     {
//       type: "input",
//       name: "text",
//       message: "Enter up to three characters:",
//     },
//     {
//       type: "input",
//       name: "textColor",
//       message: "Enter the text color (keyword or hexadecimal number):",
//     },
//     {
//       type: "list",
//       name: "shape",
//       message: "Choose a shape:",
//       choices: ["circle", "triangle", "square"],
//     },
//     {
//       type: "input",
//       name: "shapeColor",
//       message: "Enter the shape color (keyword or hexadecimal number):",
//     },
//   ];

//   const answers = await promptUser(questions);
//   generateSVG(
//     answers.text,
//     answers.textColor,
//     answers.shape,
//     answers.shapeColor
//   );
// }

// run().catch((error) => {
//   console.error("An error occurred:", error);
// });
const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./shape');

async function promptUser(questions) {
  const answers = await inquirer.prompt(questions);
  return answers;
}

function generateSVG(text, textColor, shape, shapeColor) {
  let svg = '';

  const shapeObject = createShapeObject(shape);
  shapeObject.setColor(shapeColor);
  shapeObject.setText(text);

  switch (shape) {
    case 'circle':
      svg = shapeObject.render();
      break;
    case 'triangle':
      svg = shapeObject.render();
      break;
    case 'square':
      svg = shapeObject.render();
      break;
    default:
      throw new Error('Invalid shape');
  }

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

function createShapeObject(shape) {
  switch (shape) {
    case 'circle':
      return new Circle();
    case 'triangle':
      return new Triangle();
    case 'square':
      return new Square();
    default:
      throw new Error('Invalid shape');
  }
}

async function run() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ];

  const answers = await promptUser(questions);
  generateSVG(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );
}

run().catch((error) => {
  console.error('An error occurred:', error);
});
