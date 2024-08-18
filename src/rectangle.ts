class Rectangle extends Shape implements IPrintable {
    width: number;
    height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color, 'Rectangle');
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    print(): void {
      console.log(`Area of Rectangle: ${this.width} * ${this.height}`);
    }
  }