var xEl = document.getElementById("x");
var yEl = document.getElementById("y");
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
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.print = function (text) { };
    ;
    return Logger;
}());
var Calculator = /** @class */ (function () {
    function Calculator(logger) {
        this.logger = logger;
        this.result = 0;
        logger.print("Hallo");
    }
    // constructor(logger: { print(s: string) }) {
    //   logger.print("Hallo");
    // }
    Calculator.prototype.add = function (x, y) {
        this.result = x + y;
        debugger;
        this.logger.print("Sum" + this.result);
        return this.result;
    };
    Calculator.prototype.subtract = function (x, y) {
        this.result = x - y;
        return this.result;
    };
    return Calculator;
}());
var calulator = new Calculator({
    print: function (s) { return console.log(s); }
});
document.getElementById("add").addEventListener("click", function () {
    calulator.add(+xEl.value, +yEl.value);
    result.textContent = calulator.result.toString();
});
document.getElementById("subtract").addEventListener("click", function () {
    calulator.subtract(+xEl.value, +yEl.value);
    result.textContent = calulator.result.toString();
});
var person = {
    name: "Me"
};
person.age = 1;
//# sourceMappingURL=calculator-ui.js.map