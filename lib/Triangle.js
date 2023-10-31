const Shape = require('./Shape'); // Import the Shape class

class Triangle extends Shape {
  render() {
    // Implement the render method specific to Triangle
    // Return the SVG representation for Triangle with the set color
    const svg = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Triangle;