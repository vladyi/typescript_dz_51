class Triangle extends Shape {
    private _base: number;
    private _height: number;
  
    constructor(color: string, base: number, height: number) {
      super(color, 'Triangle');
      this._base = base;
      this._height = height;
    }
  
    public calculateArea(): number {
      return 0.5 * this._base * this._height;
    }
  }