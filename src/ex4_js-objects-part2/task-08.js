const camelCaseNotation = (line) => {
  const arr = line.toLowerCase().split(' ');
  const newArr = [];
  newArr.unshift(arr.shift());
  for (const element of arr) { //eslint-disable-line
    newArr.push(element[0].toUpperCase() + element.slice(1));
  }

  return newArr.join('');
};

module.exports = camelCaseNotation;
