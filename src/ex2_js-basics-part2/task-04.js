const identicalElement = function funcIdenticalElement(newArray) {
  const element = newArray[0];
  for (let i = 1; i < newArray.length; i += 1) {
    if (element !== newArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = identicalElement;
