// Shape.mjs

export default class Shape {
  constructor() {
    this.color = 'black';  // default color
  }

  setColor(color) {
    this.color = color;
  }

  // The render method can be abstract if desired, forcing derived classes to implement it.
  render() {
    throw new Error('Render method must be implemented in derived classes.');
  }
}
