const Square = require('../lib/square.js');

describe("Square", () => {
    test("should return an svg logo with a blue square, the letters LVW in yellow font", () => {
      const square = new Square("blue", "LVW", "yellow");
      const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="300" height="300" fill="blue" />
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">LVW</text>
       </svg>`;
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });