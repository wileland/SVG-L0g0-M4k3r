import inquirer from 'inquirer';
import Circle from './lib/Circle.mjs';
import Triangle from './lib/Triangle.mjs';
import Square from './lib/Square.mjs';
import fs from 'fs/promises';

const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

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
      validate: (color) => {
        if (!isHexColor(color) && !/^([a-zA-Z]+)$/.test(color)) {
          return 'Enter a valid color name or hexadecimal color value.';
        }
        return true;
      },
    },
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
      validate: (color) => {
        if (!isHexColor(color) && !/^([a-zA-Z]+)$/.test(color)) {
          return 'Enter a valid color name or hexadecimal color value.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'outputPath',
      message: 'Enter the path to save the logo (default: ./examples/logo.svg):',
      default: './examples/logo.svg',
    },
  ]);
};

const generateLogo = (shapeChoice, shapeColor, text, textColor) => {
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

  shape.setColor(shapeColor);
  const shapeSVG = shape.render();

  const svgLogo = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="150" fill="${textColor}" text-anchor="middle" font-family="Arial" font-size="24">${text}</text>
    </svg>
  `;

  return svgLogo;
};

const saveSVGToFile = async (svgContent, filePath) => {
  await fs.writeFile(filePath, svgContent);
  console.log(`Saved SVG to ${filePath}`);
};

const main = async () => {
  try {
    const userInput = await getUserInput();
    const svgLogo = generateLogo(
      userInput.shape,
      userInput.shapeColor,
      userInput.text,
      userInput.textColor
    );

    await saveSVGToFile(svgLogo, userInput.outputPath);

    console.log(`Generated logo at ${userInput.outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
