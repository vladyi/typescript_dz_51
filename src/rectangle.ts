class Rectangle extends Shape implements IPrintable {
    private _width: number;
    private _height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color, 'Rectangle');
      this._width = width;
      this._height = height;
    }
  
    public calculateArea(): number {
      return this._width * this._height;
    }
  
    public print(): void {
      console.log(`Area of Rectangle: ${this._width} * ${this._height}`);
    }
  }