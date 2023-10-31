import Triangle from './Triangle'; // Use ES6 import syntax for Triangle

describe('Triangle Class', () => {
  it('should set the color correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.color).toBe('blue');
  });

  it('should render the correct SVG representation', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    const svg = triangle.render();
    // Use Jest's matchers to assert the expected SVG representation
    expect(svg).toBe('<polygon points="150,18 244,182 56,182" fill="red" />');
  });
});
