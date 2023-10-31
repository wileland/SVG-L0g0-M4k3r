import Shape from './Shape.mjs';

export default class Triangle extends Shape {
  render() {
    return `
      <polygon points="150,50 50,250 250,250" fill="${this.color}" />
    `;
  }
}
