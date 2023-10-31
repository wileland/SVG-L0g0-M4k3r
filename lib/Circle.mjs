import Shape from './Shape.mjs';

export default class Circle extends Shape {
  constructor() {
    super();
  }

  setColor(color) {
    if (!color) {
      throw new Error('Color value is required.');
    }
    this.color = color;
  }

  render() {
    if (!this.color) {
      throw new Error('Circle color is not set.');
    }
    return `
      <circle cx="150" cy="150" r="100" fill="${this.color}" />
    `;
  }
}
