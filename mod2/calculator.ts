var xEl = <HTMLInputElement>document.getElementById("x");
var yEl = <HTMLInputElement>document.getElementById("y");
var result = document.getElementById("result");

class Calculator {
  public result = 0;

  add(x, y) {
    this.result = x + y;

    return this.result;
  }

  subtract(x, y) {
    this.result = x - y;
    return this.result;
  }
}

var calulator = new Calculator();

document.getElementById("add").addEventListener("click", function() {
  calulator.add(+xEl.value, +yEl.value);
  result.textContent = calulator.result.toString();
});

document.getElementById("subtract").addEventListener("click", function() {
  calulator.subtract(+xEl.value, +yEl.value);
  result.textContent = calulator.result.toString();
});

