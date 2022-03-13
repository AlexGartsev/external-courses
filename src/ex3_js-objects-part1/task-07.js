const copyArray = (arr) => {
  const newArr = arr.map((value) => value);

  return newArr;
};

const deepCloneObj = (obj) => {
  const copyObj = {};
  for (const key in obj) {     //eslint-disable-line
    if (typeof obj[key] !== 'object') {
      copyObj[key] = obj[key];
    } else if (obj[key] instanceof Array) {
      copyObj[key] = copyArray(obj[key]);
    } else {
      copyObj[key] = deepCloneObj(obj[key]);
    }
  }

  return copyObj;
};

module.exports = deepCloneObj;
