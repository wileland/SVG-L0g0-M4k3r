const Square = require('./lib/Square'); // Adjust the import path as needed
const { describe, it, expect } = require('@jest/globals');

describe('Square Class', () => {
  it('should set the color correctly', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.color).toBe('yellow');
  });

  it('should render the correct SVG representation', () => {
    const square = new Square();
    square.setColor('orange');
    const svg = square.render();
    // Use Jest's matchers to assert the expected SVG representation
    expect(svg).toBe('<rect x="50" y="50" width="200" height="200" fill="orange" />');
  });
});
