/* eslint-disable */
class BookView {
  bookModel;
  search = $(".search-input");
  templateBook = document.querySelector(".template-book");
  booksDashBoard = document.querySelector(".books");
  domService = new DOMService();
  modal = document.querySelector(".new-book-modal");
  addButton = document.querySelector(".add_a_book");
  closeModal = document.querySelector(".new-book-modal-close");

  constructor(bookModel) {
    this.bookModel = bookModel;
    this.init();
    this.find();
  }

  init() {
    this.search.on("input", () => {
      this.find();
    });
    this.addButton.addEventListener("click", () => {
      this.domService.show(this.modal);
    });
    this.closeModal.addEventListener("click", () => {
      this.domService.hide(this.modal);
    });
  }

  find() {
    const filter = this.search.val();
    this.showBooks(this.bookModel.find(filter));
  }

  showBooks(books) {
    this.booksDashBoard.innerHTML = "";
    for (let book of books) {
      let newBook = this.templateBook.cloneNode(true);
      newBook
        .querySelector(".book-picture > img")
        .setAttribute("src", book.imagePath);
      newBook.querySelector(".book-name").textContent = book.name;
      newBook.querySelector(".book-author").textContent = book.author;
      this.showRate(newBook.querySelectorAll(".star"), book);
      newBook.classList.remove("template-book");
      this.domService.show(newBook);
      this.booksDashBoard.appendChild(newBook);
    }
  }

  showRate(stars, book) {
    const rate = book.rate;
    const fullStarsCount = Math.floor(rate);
    for (let i = 0; i < fullStarsCount; i++) {
      stars[i].classList.add("rated");
    }
    this.addRateListeners(stars, book, this);
  }

  addRateListeners(stars, book, that) {
    $(stars)
      .hover(function () {
        $(this).addClass("to_rate");
        $(this)
          .parent()
          .find(".star:lt(" + $(this).index() + ")")
          .addClass("to_rate");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .addClass("no_to_rate");
      })
      .mouseout(function () {
        $(this).parent().find(".star").removeClass("to_rate");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .removeClass("no_to_rate");
      })
      .click(function () {
        $(this).removeClass("to_rate").addClass("rated");
        $(this)
          .parent()
          .find(".star:lt(" + $(this).index() + ")")
          .removeClass("to_rate")
          .addClass("rated");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .removeClass("no_to_rate")
          .removeClass("rated");
      });
  }
}
