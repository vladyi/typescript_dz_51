abstract class Shape implements ICalculetable {
    protected readonly _color: string;
    protected readonly _name: string;
  
    constructor(color: string, name: string) {
      this._color = color;
      this._name = name;
    }
  
    abstract calculateArea(): number;
  }