abstract class Shape implements ICalculetable {
    readonly _color: string;
    readonly _name: string;
  
    constructor(color: string, name: string) {
      this._color = color;
      this._name = name;
    }
  
    abstract calculateArea(): number;
  }