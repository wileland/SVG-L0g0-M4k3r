const inquirer = require('inquirer');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');
const fs = require('fs');

const SHAPE_CHOICES = ['circle', 'triangle', 'square'];

const getUserInput = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Only up to three characters allowed.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color name or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: SHAPE_CHOICES,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color name or hexadecimal):',
    },
  ]);
};

const generateSVG = (shape, shapeColor) => {
  shape.setColor(shapeColor);
  return shape.render();
};

const saveSVGToFile = async (svgRepresentation) => {
  const outputDirectory = './examples/';
  const svgFileName = 'logo.svg';
  const svgFilePath = outputDirectory + svgFileName;
  const { promises: fsPromises } = require('fs');
  await fsPromises.writeFile(svgFilePath, svgRepresentation);
  console.log(`Generated ${svgFileName}`);
};

const main = async () => {
  try {
    const userInput = await getUserInput();

    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape choice');
    }

    const svgRepresentation = generateSVG(shape, userInput.shapeColor);
    await saveSVGToFile(svgRepresentation);
  } catch (error) {
    console.error('Error:', error);
  }
};
// Function to generate the SVG logo based on user input
function generateLogo(shapeChoice, shapeColor, text, textColor) {
  function generateLogo(shapeChoice, shapeColor, text, textColor) {
    // Create an instance of the appropriate shape class based on shapeChoice
    let shape;
    switch (shapeChoice) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape choice');
    }
  
    // Set color properties for the shape and text
    shape.setColor(shapeColor);
  
    // Generate the SVG representation for the shape
    const shapeSVG = shape.render();
  
    // Create the SVG representation with text elements
    const svg = `
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="150" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  
    // Return the SVG representation as a string
    return svg;
  }
}

// Function to save SVG to a file
function saveSVGToFile(svgContent, filePath) {
  // Use the fs module to write svgContent to the specified filePath
  fs.writeFileSync(filePath, svgContent);

  console.log(`Saved SVG to ${filePath}`);
}


// Function to collect user input
async function promptUserForInput() {
  const userInput = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color name or hexadecimal):',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Only up to three characters allowed.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color name or hexadecimal):',
    },
  ]);

  return userInput;
}

// Main function
async function main() {
  try {
    // Prompt the user for input
    const userInput = await promptUserForInput();

    // Generate the SVG logo based on user input
    const svgLogo = generateLogo(
      userInput.shape,
      userInput.shapeColor,
      userInput.text,
      userInput.textColor
    );

    // Specify the file path where you want to save the SVG logo
    const outputDirectory = './examples/';
    const svgFilePath = outputDirectory + 'logo.svg';

    // Save the SVG logo to a file using the saveSVGToFile function
    await saveSVGToFile(svgLogo, svgFilePath);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function to start the application
main();
