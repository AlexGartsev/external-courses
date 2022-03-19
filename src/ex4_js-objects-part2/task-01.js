const searchProperty = (property, obj) => {
  if (property in obj) {
    delete obj[property]; //eslint-disable-line
    return obj[property];
  }

  return undefined;
};

module.exports = searchProperty;
