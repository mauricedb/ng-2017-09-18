function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function(x, y) {
  this.result = x + y;
  return this.result;
};

Calculator.prototype.subtract = function(x, y) {
  this.result = x - y;
  return this.result;
};
