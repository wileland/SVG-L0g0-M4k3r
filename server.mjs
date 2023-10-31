const http = require('http');
const inquirer = require('inquirer');
const Circle = require('./lib/Circle.mjs');
const Triangle = require('./lib/Triangle.mjs');
const Square = require('./lib/Square.mjs');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the SVG Logo Maker Server!');
  } else if (req.url === '/api/logo') {
    try {
      // Prompt the user for input
      const userInput = await getUserInput();

      // Generate the SVG logo based on user input
      const svgLogo = generateLogo(
        userInput.shape,
        userInput.shapeColor,
        userInput.text,
        userInput.textColor
      );

      // Set the response headers to indicate SVG content
      res.setHeader('Content-Type', 'image/svg+xml');
      res.statusCode = 200;

      // Send the generated SVG logo as the response
      res.end(svgLogo);
    } catch (error) {
      res.statusCode = 500;
      res.end('Error generating logo');
    }
  } else {
    // Handle unknown routes with a 404 status code
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Define the server port and hostname
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

// Start the server
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

// Function to collect user input
async function getUserInput() {
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

// Function to generate the SVG logo based on user input
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
