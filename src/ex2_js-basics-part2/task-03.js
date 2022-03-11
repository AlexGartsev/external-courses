const counterNumber = function (newArray) { //eslint-disable-line
  let counterZero = 0;
  let counterEven = 0;
  let counterUneven = 0;
  const finalArray = [];

  for (let i = 0; i < newArray.length; i += 1) {
    if (typeof newArray[i] === 'number') {
      if (newArray[i] === 0) {
        counterZero += 1;
      } else if (newArray[i] % 2 === 0) {
        counterEven += 1;
      } else {
        counterUneven += 1;
      }
    }
  }

  finalArray.push(counterEven);
  finalArray.push(counterUneven);
  finalArray.push(counterZero);

  return finalArray;
};

module.exports = counterNumber;
