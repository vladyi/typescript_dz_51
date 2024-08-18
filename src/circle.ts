class Circle extends Shape {
    radius: number;
  
    constructor(color: string, radius: number) {
      super(color, 'Circle');
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }