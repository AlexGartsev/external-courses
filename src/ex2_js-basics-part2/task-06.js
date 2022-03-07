const simpleNumber = function funcSimpleNumber(inputNumber) {
  if (inputNumber === 1 || inputNumber === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  if (inputNumber > 1000) {
    return 'Данные неверны';
  }
  if (inputNumber > 1 && inputNumber < 1001) {
    for (let i = 2; i < inputNumber; i += 1) {
      if (inputNumber % i === 0) {
        return `Число ${inputNumber} - составное число`;
      }
    }
  }
  return `Число ${inputNumber} - простое число`;
};

module.exports = simpleNumber;
