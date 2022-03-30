const functionMap = (array, callback) => {
  const newArr = [];
  array.forEach((item, i) => {
    newArr.push(callback(item, i, array));
  });

  return newArr;
};

module.exports = functionMap;
