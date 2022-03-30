const functionReduce = (array, callback, initialValue) => {
  let previousValue = 0;
  if (initialValue && initialValue !== 0) {
    previousValue = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  } else {
    previousValue = array[0];
    for (let i = 1; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }

  return previousValue;
};

module.exports = functionReduce;
