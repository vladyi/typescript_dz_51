class Triangle extends Shape {
    base: number;
    height: number;
  
    constructor(color: string, base: number, height: number) {
      super(color, 'Triangle');
      this.base = base;
      this.height = height;
    }
  
    calculateArea(): number {
      return 0.5 * this.base * this.height;
    }
  }