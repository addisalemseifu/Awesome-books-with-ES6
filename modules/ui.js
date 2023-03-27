import Store from './storage.js';

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    const booksList = document.querySelector('.books-list');
    newBook.innerHTML = `
    <h2 class="name">"${book.name}" by &nbsp;</h2>
    <h2 class="title">${book.title}</h2>
    <button class="remover" id="${book.id}">Remove</button>`;
    booksList.appendChild(newBook);
    const bookIterator = document.getElementsByClassName('newBook');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < bookIterator.length; i++) {
      if (i % 2 !== 0) {
        bookIterator[i].classList.add('backgroundColor');
      }
    }
  }

  static deleteBook(el) {
    if (el.classList.contains('remover')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#txtTitle').value = '';
    document.querySelector('#txtAuthor').value = '';
  }

  static pageStyler() {
    const list = document.getElementsByClassName('list');
    const main = document.getElementsByClassName('main');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', () => {
      // eslint-disable-next-line no-plusplus
        for (let j = 0; j < main.length; j++) {
          if (list[i].dataset.id === main[j].dataset.id) {
            // eslint-disable-next-line no-plusplus
            for (let m = 0; m < main.length; m++) {
              if (main[m].classList.contains('active')) {
                main[m].classList.remove('active');
              }
            }
            // eslint-disable-next-line no-plusplus
            for (let d = 0; d < list.length; d++) {
              if (list[d].classList.contains('active_link')) {
                list[d].classList.remove('active_link');
              }
            }
            main[j].classList.add('active');
            list[j].classList.add('active_link');
          }
        }
      });
    }
  }
}