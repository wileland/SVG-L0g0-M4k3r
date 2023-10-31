const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');

// Triangle Class
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
    expect(svg).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
  });
});

// Circle Class
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
    expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');
  });
});

// Square Class
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
    expect(svg).toEqual('<rect x="50" y="50" width="200" height="200" fill="orange" />');
  });
});