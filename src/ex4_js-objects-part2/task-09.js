const additiveLine = (line, addLine, numbic) => {
  const arr = line.split(' ');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === numbic) {
      newArr.push(arr[i]);
      newArr.push(addLine);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr.join(' ');
};

module.exports = additiveLine;
