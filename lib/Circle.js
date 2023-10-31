const Shape = require('./Shape'); // Import the Shape class

class Circle extends Shape {
  render() {
    // Implement the render method specific to Circle
    // Return the SVG representation for Circle with the set color
    const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Circle;