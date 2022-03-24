function Calculator() {
  let result = 0;

  function add(numbic = 0) {
    result += numbic;

    return add;
  }

  function subtract(numbic = 0) {
    result -= numbic;

    return subtract;
  }

  function divide(numbic = 1) {
    result /= numbic;

    return divide;
  }

  function multiply(numbic = 1) {
    result *= numbic;

    return multiply;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = Calculator();
module.exports = calculator;
