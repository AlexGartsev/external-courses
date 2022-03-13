const cloneObject = (obj) => {
  const cloneObj = Object.assign({}, obj); //eslint-disable-line

  return cloneObj;
};

module.exports = cloneObject;
