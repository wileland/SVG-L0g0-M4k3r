const Shape = require('./Shape'); // Import the Shape class

class Square extends Shape {
  render() {
    // Implement the render method specific to Square
    // Return the SVG representation for Square with the set color
    const svg = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Square;