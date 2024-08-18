class Square extends Shape implements IPrintable {
    private _sideLength: number;
  
    constructor(color: string, sideLength: number) {
      super(color, 'Square');
      this._sideLength = sideLength;
    }
  
    public calculateArea(): number {
      return this._sideLength * this._sideLength;
    }
  
    public print(): void {
      console.log(`Area of Square: ${this._sideLength} * ${this._sideLength}`);
    }
  }