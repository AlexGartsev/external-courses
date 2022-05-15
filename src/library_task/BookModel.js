/* eslint-disable */
class BookModel { 
  books = [];
  personalRates = [];

  constructor() {
    this.initBooks();
    this.initPersonalRates();
  }

  initBooks() {
    this.books.push(
      new FBook(
        this.books.length,
        "Jo Nesbo",
        "The Bat",
        "./assets/books/01.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Jo Nesbo",
        "The Redbreast",
        "./assets/books/02.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Neil Gaiman",
        "American Gods",
        "./assets/books/03.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Glen Cook",
        "Port Of Shadows",
        "./assets/books/04.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Jo Nesbo",
        "The Snowman",
        "./assets/books/05.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Glen Cook",
        "The Black Company",
        "./assets/books/06.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Nikolai Gogol",
        "Dead Souls",
        "./assets/books/07.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Nikolai Gogol",
        "Viy",
        "./assets/books/08.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Neil Gaiman",
        "Anansi Boys",
        "./assets/books/09.jpg"
      )
    );
    this.books.push(
      new FBook(
        this.books.length,
        "Glen Cook",
        "The Books Of The South",
        "./assets/books/10.jpg"
      )
    );
  }

  initPersonalRates() {
    this.personalRates.push(new FPersonalRate(0, 5));
    this.personalRates.push(new FPersonalRate(1, 5));
    this.personalRates.push(new FPersonalRate(3, 2));
    this.personalRates.push(new FPersonalRate(4, 4));
  }

  find(filter) {
    const foundBooks = [];
    for (let book of this.books) {
      if (this.isMatchPattern(book, filter)) {
        foundBooks.push(book);
      }
    }
    return foundBooks;
  }

  isMatchPattern(book, filter) {
    const regex = new RegExp(filter, "gi");
    return regex.exec(book.name) || regex.exec(book.author);
  }
}
