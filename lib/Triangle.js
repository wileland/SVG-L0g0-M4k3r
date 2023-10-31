class Triangle {
  constructor() {
    this.color = ''; // Initialize the color property
  }

  setColor(color) {
    this.color = color; // Set the color property
  }

  render() {
    // Generate the SVG representation for a triangle with the set color
    const svg = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Triangle;
