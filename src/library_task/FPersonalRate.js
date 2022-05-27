/* eslint-disable */
class FPersonalRate { 
  constructor(bookId, rate) {
    this._bookId = bookId;
    this._rate = rate;
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(value) {
    this._bookId = value;
  }

  get rate() {
    return this._rate;
  }

  set rate(value) {
    this._rate = value;
  }
}
