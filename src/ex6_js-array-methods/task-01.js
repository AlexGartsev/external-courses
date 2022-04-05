const remakeIndex = (i, arr) => {
  if (Math.abs(i) > arr.length) {
    return 0;
  }
  return arr.length + i;
};

const funcSlice = (array, begin = 0, end = array.length) => {
  const newArr = [];
  if (end > array.length) {
    end = array.length; //eslint-disable-line
  }

  if (begin < 0) {
    begin = remakeIndex(begin, array); //eslint-disable-line
  }

  if (end < 0) {
    end = remakeIndex(end, array); //eslint-disable-line
  }

  for (let i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
};

module.exports = funcSlice;
