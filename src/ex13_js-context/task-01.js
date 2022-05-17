const Calculator = {
  result: 0,

  add(numbic = 0) {
    this.result += numbic;
    return this;
  },

  subtract(numbic = 0) {
    this.result -= numbic;
    return this;
  },

  divide(numbic = 1) {
    this.result /= numbic;
    return this;
  },

  multiply(numbic = 1) {
    this.result *= numbic;
    return this;
  },

  getResult() {
    return this.result;
  },

  reset() {
    this.result = 0;
    return this;
  },

  setState(numbic = '') {
    if (numbic === '' || numbic === undefined) {
      return this;
    }
    this.result = numbic;
    return this;
  },

  fetchData(callback) {
    setTimeout(() => callback(500), 3000);
  },
};

module.exports = Calculator;
