class Circle extends Shape {
    private _radius: number;
  
    constructor(color: string, radius: number) {
      super(color, 'Circle');
      this._radius = radius;
    }
  
    public calculateArea(): number {
      return Math.PI * this._radius * this._radius;
    }
  }