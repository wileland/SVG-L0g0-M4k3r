class Square {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const svg = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Square;
