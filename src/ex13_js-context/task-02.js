function Hangman(riddleWord) {
  this.riddleWord = riddleWord;
  this.counterErrors = 6;
  this.ridleSymbol = [];
  this.guessString = [];
  this.errorsSymbol = [];

  this.createRiddle = function createRiddle() {
    this.ridleSymbol = this.riddleWord.split('');
    for (let i = 0; i < riddleWord.length; i += 1) {
      this.guessString.push('_');
    }
    return this.guessString.join('');
  };

  this.guess = function guess(symbol) {
    if (this.counterErrors < 1) return 'END GAME';
    if (this.ridleSymbol.indexOf(symbol) === -1) {
      this.counterErrors -= 1;
      this.errorsSymbol.push(symbol);
      return `wrong letter, errors left ${this.counterErrors} | ${this.errorsSymbol}`;
    }
    const guessNumber = [];
    this.ridleSymbol.forEach((item, number) => {
      if (item === symbol) guessNumber.push(number);
      return guessNumber;
    });
    guessNumber.forEach((item) => {
      this.guessString[item] = symbol;
    });
    return this.guessString.join('');
  };

  this.getGuessedString = function getGuessedString() {
    return this.guessString;
  };

  this.getErrorsLeft = function getErrorsLeft() {
    return this.counterErrors;
  };

  this.getWrongSymbols = function getWrongSymbols() {
    return this.errorsSymbol;
  };

  this.getStatus = function getStatus() {
    return `${this.guessString} | errors left ${this.counterErrors}`;
  };

  this.startAgain = function startAgain(newRiddleWord) {
    this.riddleWord = newRiddleWord;
    this.counterErrors = 6;
    this.ridleSymbol = [];
    this.guessString = [];
    this.errorsSymbol = [];
    this.createRiddle();
    return this;
  };

  this.createRiddle();
}

const hangman = new Hangman();

module.exports = hangman;
