var xEl = document.getElementById("x");
var yEl = document.getElementById("y");
var result = document.getElementById("result");

var calulator = new Calculator();

document.getElementById("add").addEventListener("click", function() {
  calulator.add(xEl.value, yEl.value);
  result.textContent = calulator.result;
});

document.getElementById("subtract").addEventListener("click", function() {
  calulator.subtract(xEl.value, yEl.value);
  result.textContent = calulator.result;
});
