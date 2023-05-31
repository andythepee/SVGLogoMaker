class Shape {
  constructor() {
    this.color = '';
    this.text = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    return '';
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,18 244,182 56,182" fill="${this.color}" />
              <text x="150" y="120" text-anchor="middle" font-family="Arial" font-size="20" fill="black">${this.text}</text>
            </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="100" r="50" fill="${this.color}" />
              <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="20" fill="black">${this.text}</text>
            </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect x="100" y="50" width="100" height="100" fill="${this.color}" />
              <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="20" fill="black">${this.text}</text>
            </svg>`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
