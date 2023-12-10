class Shape {
    constructor(shapeType) {
      this.shapeType = shapeType;
    }
  
    createShapeMethod() {
      switch (this.shapeType) {
        case 'circle':
          this[`calculate${this.shapeType}Area`] = () => {
            console.log('Calculating area for a circle...');
            // Calculation for circle's area
          };
          break;
        case 'rectangle':
          this[`calculate${this.shapeType}Area`] = () => {
            console.log('Calculating area for a rectangle...');
            // Calculation for rectangle's area
          };
          break;
        default:
          console.log('Invalid shape');
      }
    }
  }
  
  let circle = new Shape('circle');
  circle.createShapeMethod();
  circle.calculateCircleArea(); // Output: Calculating area for a circle...
  
  let rectangle = new Shape('rectangle');
  rectangle.createShapeMethod();
  rectangle.calculateRectangleArea(); // Output: Calculating area for a rectangle...
  