const { Circle } = require("../lib/circle.js");

describe("Circle", () => {
  test("should return an svg logo with a green circle, the letters JNW in red font", () => {
    const circle = new Circle("green", "JNW", "red");
    const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="80" style="fill:green" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">JNW</text> 
     </svg>`;
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
