const inquirer = require("inquirer");
const fs = require('fs');
const { Circle } = require("./lib/circle.js");
const { Square } = require("./lib/square.js");
const { Triangle } = require("./lib/triangle.js");

inquirer.prompt([
  {
    name: "textContent",
    type: "input",
    message: "Please enter three characters for your logo.",
    validate: (text) =>
      text.length <= 3 || "Your text must be three characters or less.",
  },
  {
    name: "textColor",
    type: "input",
    message: "Please enter a color for your text.",
  },
  {
    name: "shape",
    type: "list",
    message: "Please select a shape for your logo.",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Please enter a color for your shape.",
  },
])
.then((response) => {
    if (response.shape === 'Circle'){
        const circle = new Circle(response.shapeColor, response.textContent, response.textColor);
        console.log(response.shapeColor + " " + circleSvg);
        fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
            if(error){
                console.log(error);
            }
        });
    }  else if (response.shape === 'Square'){
        const square = new Square(response.shapeColor, response.textContent, response.textColor);
        fs.writeFile('./examples/logo.svg', square.render(), (error) => {
            if(error){
                console.log(error);
            }
        });
    } else if (response.shape === 'Triangle'){
        const triangle = new Triangle(response.shapeColor, response.textContent, response.textColor);
        fs.writeFile('./examples/logo.svg', triangle.render(), (error) => {
            if(error){
                console.log(error);
            }
        });
    }
})
.then(() =>{
    return console.log('Successfully generated logo.svg');
})
