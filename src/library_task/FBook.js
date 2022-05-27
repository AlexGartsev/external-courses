/* eslint-disable */
class FBook { 
  constructor(id, author, name, imagePath) {
    this._id = id;
    this._author = author;
    this._name = name;

    this._imagePath = imagePath;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get imagePath() {
    return this._imagePath;
  }
  set imagePath(value) {
    this._imagePath = value;
  }
}
