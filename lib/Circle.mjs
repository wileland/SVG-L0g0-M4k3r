import Shape from './lib/Shape.mjs';

export default class Circle extends Shape {
  render() {
    return `
      <circle cx="150" cy="150" r="100" fill="${this.color}" />
    `;
  }
}
