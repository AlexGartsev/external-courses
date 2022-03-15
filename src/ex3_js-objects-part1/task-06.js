const getProperty = (object, propertyPath) => {
  const arr = propertyPath.split('.');
  let currentProp = object;
  for (let i = 0; i < arr.length; i += 1) {
    if (currentProp.hasOwnProperty(arr[i])) {
      currentProp = currentProp[arr[i]];
    } else {
      currentProp = undefined;
      break;
    }
  }
  return currentProp;
};

module.exports = getProperty;
