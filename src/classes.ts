class Rectangle {
  private width: number
  private height: number
  private area: number
  constructor(height: number, width: number) {
    this.width = width
    this.height = height

    console.log({ height: this.height, wdith: this.width })
  }

  getHeight() {
    return this.height
  }

  getWidth() {
    return this.width
  }

  calculateArea() {
    this.area = this.getHeight() * this.getWidth()
  }

  getArea() {
    return this.area
  }
}

const rect = new Rectangle(5, 12)
console.log(rect.getArea())
console.log(rect.calculateArea())
console.log(rect.getArea())
console.log(rect.getHeight())
