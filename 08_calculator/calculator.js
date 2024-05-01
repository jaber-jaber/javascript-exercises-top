const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return Math.abs(a - b);
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(args) {
  return args.reduce((multiplier, current) => multiplier * current, 1)
}

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {

  let val = 1;
  
  for (let i = num; i > 0; i--) {
    val *= i;
  }

  return val;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
