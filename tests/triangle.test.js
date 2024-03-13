const Triangle = require('../lib/triangle.js');

describe("Triangle", () => {
    test("should return an svg logo with a purple triangle, the letters RDW in green font", () => {
      const triangle = new Triangle("purple", "RDW", "green");
      const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="300" height="300" fill="purple" />
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">RDW</text>
       </svg>`;
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });