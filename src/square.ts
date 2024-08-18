class Square extends Shape implements IPrintable {
    sideLength: number;
  
    constructor(color: string, sideLength: number) {
      super(color, 'Square');
      this.sideLength = sideLength;
    }
  
    calculateArea(): number {
      return this.sideLength * this.sideLength;
    }
  
    print(): void {
      console.log(`Area of Square: ${this.sideLength} * ${this.sideLength}`);
    }
  }