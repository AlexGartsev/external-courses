const randomNumber = (min, max) => min + Number((Math.random() * (max - min)).toFixed());

module.exports = randomNumber;
