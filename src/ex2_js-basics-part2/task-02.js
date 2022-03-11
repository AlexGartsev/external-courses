const runArray = function (newArray) { //eslint-disable-line
  for (let i = 0; i < newArray.length; i += 1) {
    console.log(newArray[i]);
  }
  console.log(newArray.length);

  return undefined;
};

module.exports = runArray;
