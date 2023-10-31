const Circle = require('./lib/Circle'); // Adjust the import path as needed
const { describe, it, expect } = require('@jest/globals');

describe('Circle Class', () => {
  it('should set the color correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.color).toBe('green');
  });

  it('should render the correct SVG representation', () => {
    const circle = new Circle();
    circle.setColor('purple');
    const svg = circle.render();
    // Use Jest's matchers to assert the expected SVG representation
    expect(svg).toBe('<circle cx="150" cy="100" r="80" fill="purple" />');
  });
});
