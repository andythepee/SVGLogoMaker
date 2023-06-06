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
