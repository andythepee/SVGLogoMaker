const { Circle, Triangle, Square } = require('../shape');

describe('Circle', () => {
  test('should render a circle shape with the specified color', () => {
    const circle = new Circle();
    circle.setColor('red');

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="100" r="50" fill="red" />
              <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="20" fill="black"></text>
            </svg>`;
    const renderedSVG = circle.render();

    expect(renderedSVG).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
  test('should render a triangle shape with the specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,18 244,182 56,182" fill="blue" />
              <text x="150" y="120" text-anchor="middle" font-family="Arial" font-size="20" fill="black"></text>
            </svg>`;
    const renderedSVG = triangle.render();

    expect(renderedSVG).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('should render a square shape with the specified color', () => {
    const square = new Square();
    square.setColor('green');

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect x="100" y="50" width="100" height="100" fill="green" />
              <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="20" fill="black"></text>
            </svg>`;
    const renderedSVG = square.render();

    expect(renderedSVG).toEqual(expectedSVG);
  });
});
