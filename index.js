import { DateTime } from './node_modules/luxon/src/luxon.js';
import Book from './modules/book.js';
import Store from './modules/storage.js';
import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
  UI.pageStyler();
  const time = document.getElementsByClassName('time');
  // eslint-disable-next-line no-plusplus
  for (let g = 0; g < time.length; g++) {
    time[g].innerHTML = DateTime.now();
  }
});

// Event: Add a Book
document.querySelector('.addBook').addEventListener('click', (e) => {
// Prevent default
  e.preventDefault();
  // Get form value
  const title = document.querySelector('#txtTitle').value;
  const Author = document.querySelector('#txtAuthor').value;

  // Validation
  if (title !== '' || Author !== '') {
    const book = new Book(Author, title);

    // Add book to Storage
    Store.addBook(book);

    // Add book to UI
    UI.addBookToList(book);
  }

  // Clear fiels
  UI.clearFields();
});
// Event: Remove a Book
document.querySelector('.books-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
  // Remove book from store
  Store.removeBook(e.target);
});