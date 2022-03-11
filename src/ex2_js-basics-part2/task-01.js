const determiner = function (inputData) { //eslint-disable-line
  if (typeof inputData === 'number' && isNaN(inputData)) {
    return undefined;
  }
  if (typeof inputData === 'number') {
    return 'number';
  }
  if (typeof inputData === 'string') {
    return 'string';
  }
  return undefined;
};

module.exports = determiner;
