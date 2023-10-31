import Shape from './Shape.mjs';

export default class Square extends Shape {
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
      throw new Error('Square color is not set.');
    }
    return `
      <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
    `;
  }
}
