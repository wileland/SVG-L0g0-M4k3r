class Shape {
    constructor() {
      this.color = ''; // Initialize the color property
    }
  
    setColor(color) {
      this.color = color; // Set the color property
    }
  
    render() {
      // This is a placeholder method that should be overridden by child classes
      return '';
    }
  }
  
  module.exports = Shape;