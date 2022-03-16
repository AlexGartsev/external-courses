const identicalElement = function (newArray) { //eslint-disable-line
  for (let i = 1; i < newArray.length; i += 1) {
    if (newArray[i - 1] !== newArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = identicalElement;
