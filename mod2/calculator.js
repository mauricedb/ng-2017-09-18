var xEl = document.getElementById("x");
var yEl = document.getElementById("y");
var result = document.getElementById("result");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.result = 0;
    }
    Calculator.prototype.add = function (x, y) {
        this.result = x + y;
        return this.result;
    };
    Calculator.prototype.subtract = function (x, y) {
        this.result = x - y;
        return this.result;
    };
    return Calculator;
}());
var calulator = new Calculator();
document.getElementById("add").addEventListener("click", function () {
    calulator.add(+xEl.value, +yEl.value);
    result.textContent = calulator.result.toString();
});
document.getElementById("subtract").addEventListener("click", function () {
    calulator.subtract(+xEl.value, +yEl.value);
    result.textContent = calulator.result.toString();
});
