class Triangle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const svg = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Triangle;
