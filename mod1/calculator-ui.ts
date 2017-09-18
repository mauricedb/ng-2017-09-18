var xEl = <HTMLInputElement>document.getElementById("x");
var yEl = <HTMLInputElement>document.getElementById("y");
var result = document.getElementById("result");

// function Calculator() {
//   this.result = 0;
// }

// Calculator.prototype.add = function(x: number, y: number) {
//   var sum = x + y;

//   this.result = x + y;
//   return this.result;
// };

// Calculator.prototype.subtract = function(x, y) {
//   this.result = x - y;
//   return this.result;
// };

class Logger {
  print(text: string){};
}



class Calculator {
  public result: number = 0;

  constructor(private logger: Logger) {
    logger.print("Hallo");
  }

  // constructor(logger: { print(s: string) }) {
  //   logger.print("Hallo");
  // }

  add(x: number, y: number): number {
    this.result = x + y;

    debugger;
    
    this.logger.print("Sum" + this.result);
    return this.result;
  }

  subtract(x: number, y: number): number {
    this.result = x - y;
    return this.result;
  }
}

var calulator = new Calculator({
  print: s => console.log(s)
});

document.getElementById("add").addEventListener("click", function() {
  calulator.add(+xEl.value, +yEl.value);
  result.textContent = calulator.result.toString();
});

document.getElementById("subtract").addEventListener("click", function() {
  calulator.subtract(+xEl.value, +yEl.value);
  result.textContent = calulator.result.toString();
});

interface Person {
  name: string;
  age?: number;
}

var person: Person = {
  name: "Me"
};

person.age = 1;
