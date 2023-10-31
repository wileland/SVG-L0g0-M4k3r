import Shape from './Shape.mjs';

export default class Triangle extends Shape {
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
      throw new Error('Triangle color is not set.');
    }
    return `
      <polygon points="150,50 50,250 250,250" fill="${this.color}" />
    `;
  }
}
