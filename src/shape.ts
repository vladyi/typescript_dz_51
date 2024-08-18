abstract class Shape {
    readonly color: string;
    readonly name: string;
  
    constructor(color: string, name: string) {
      this.color = color;
      this.name = name;
    }
  
    abstract calculateArea(): number;
  }