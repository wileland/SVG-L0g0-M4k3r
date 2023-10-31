class Circle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Circle;
