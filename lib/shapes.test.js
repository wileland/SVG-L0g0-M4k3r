// Triangle Class
const Triangle = require('./lib\Triangle.js'); 
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
    expect(svg).toMatch('<polygon points="...');
    expect(svg).toContain('fill="red"');
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
      expect(svg).toMatch('<circle cx="...');
      expect(svg).toContain('fill="purple"');
    });
  });
  // Square Test
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
      expect(svg).toMatch('<rect x="...');
      expect(svg).toContain('fill="orange"');
    });
  });
  