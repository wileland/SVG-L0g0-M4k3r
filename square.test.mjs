import Square from './lib/Square.mjs'; // 

describe('Square Class', () => {
  it('should set the color correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.color).toBe('green');
  });

  it('should render the correct SVG representation', () => {
    const square = new Square();
    square.setColor('purple');
    const svg = square.render();
    // Use Jest's matchers to assert the expected SVG representation
    expect(svg).toBe('<rect x="50" y="50" width="200" height="200" fill="purple" />');
  });
});
