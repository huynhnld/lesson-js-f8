//1. Let, const
//2. Template Literals
//3. Multi-line String
//4. Arrow Function
//5. Classes
//cách cũ
function Course(name, price) {
  this.name = name;
  this.price = price;
}
//cách mới ES6
class Courses {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}
//6. Default parameter values
//7. Desttructuring
//8. Rest parameters
//9. Spread
//10. Enhanced object literals
//11. Tagged template literal
//12. Modules

//1. Var / Let , Const: Scope(phạm vi), Hosting(trình thông dịch js)
//2. Const / Var, Let: Assignment

// Code Block: if else, loop, {}, ...

f;
