const maxPositiveNumber = function funcMaxPositiveNumber(newArray) {
  let maxNumber = newArray[0];
  for (let i = 1; i < newArray.length; i += 1) {
    if (newArray[i] > maxNumber) {
      maxNumber = newArray[i];
    }
  }
  return maxNumber;
};

module.exports = maxPositiveNumber;
