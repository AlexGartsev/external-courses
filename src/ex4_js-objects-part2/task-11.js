const counterNumber = (line) => {
  const arr = line.split('');
  const counterObj = {};
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (counterObj[element] !== undefined) {
      counterObj[element] += 1;
    } else {
      counterObj[element] = 1;
    }
  }
  for (const key in counterObj) { //eslint-disable-line 
    console.log(`${key} встречается ${counterObj[key]} раз`);
  }
};

module.exports = counterNumber;
