const getProperty = (object, propertyPath) => {
  const propertyArray = propertyPath.split('.');
  let currentProp = object;
  for (let i = 0; i < propertyArray.length; i += 1) {
    const prop = propertyArray[i];
    if (currentProp.hasOwnProperty(prop)) {
      currentProp = currentProp[prop];
    } else {
      currentProp = undefined;
      break;
    }
  }
  return currentProp;
};

module.exports = getProperty;
