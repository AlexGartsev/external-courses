const searchProperty = (property, obj) => {
  if (!obj.hasOwnProperty(property)) {
    obj[property] = 'new'; //eslint-disable-line
  }
  return Object.assign({}, obj);  //eslint-disable-line
};

module.exports = searchProperty;
