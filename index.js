// Use dynamic import for inquirer
const promptUser = async () => {
  const { createPromptModule } = await import('inquirer');
  const prompt = createPromptModule();

  return prompt([
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
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color name or hexadecimal):',
    },
  ]);
};

const main = async () => {
  try {
    const userInput = await promptUser();

    // Create the appropriate shape object based on user input (Triangle, Circle, or Square)
    let shape;
    switch (userInput.shape) {
      case 'circle':
        const { Circle } = await import('./lib/Circle.js');
        shape = new Circle();
        break;
      case 'triangle':
        const { Triangle } = await import('./lib/Triangle.js');
        shape = new Triangle();
        break;
      case 'square':
        const { Square } = await import('./lib/Square.js');
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape choice');
    }

    // Set the color of the shape object
    shape.setColor(userInput.shapeColor);

    // Render the SVG representation of the shape
    const svgRepresentation = shape.render();

    // Save the SVG to a file in the output directory
    const outputDirectory = './examples/';
    const svgFileName = 'logo.svg';
    const svgFilePath = outputDirectory + svgFileName;
    const { promises: fsPromises } = await import('fs');
    await fsPromises.writeFile(svgFilePath, svgRepresentation);

    console.log(`Generated ${svgFileName}`);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Call the main function to start the application
main();
