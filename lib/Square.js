export default class Square {
  constructor() {
    this.color = ''; // Initialize the color property
  }

  setColor(color) {
    this.color = color; // Set the color property
  }

  render() {
    // Generate the SVG representation for a square with the set color
    const svg = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    return svg;
  }
}
