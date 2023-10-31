export default class Circle {
  constructor() {
    this.color = ''; // Initialize the color property
  }

  setColor(color) {
    this.color = color; // Set the color property
  }

  render() {
    // Generate the SVG representation for a circle with the set color
    const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    return svg;
  }
}
