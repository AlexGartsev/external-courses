const upperString = (line) => {
  const arr = line.split(' ');
  const newArr = [];
  for (const element of arr) {  //eslint-disable-line
    newArr.push(element[0].toUpperCase() + element.slice(1));
  }

  return newArr.join(' ');
};

module.exports = upperString;
