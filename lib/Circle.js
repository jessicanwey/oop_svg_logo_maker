const Shape = require("./shape");

class Circle extends Shape {
  constructor(shapeColor, textContent, textColor) {
    super(shapeColor, textContent, textColor);
  }
  render() {

    const svg = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="80" style="fill:${this.shapeColor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text> 
     </svg>`;

    return svg;

  }
}

module.exports = { Circle };
