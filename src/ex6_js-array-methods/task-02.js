const functionSome = (array, callback) => { //eslint-disable-line
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

module.exports = functionSome;