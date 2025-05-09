import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as booksApi from './modules/booksAPI.js';

//!======================================================

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
  loader: document.querySelector('.js-loader'),
};

//!======================================================

refs.createFormElem.addEventListener('submit', handleCreateBook);
refs.updateFormElem.addEventListener('submit', handleUpdateBook);
refs.resetFormElem.addEventListener('submit', handleResetBook);
refs.deleteFormElem.addEventListener('submit', handleDeleteBook);

function handleCreateBook(e) {
  e.preventDefault();
  showLoader();
  const formData = new FormData(e.target);

  const userBook = {
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
    img: `https://picsum.photos/1280/720?random=${Math.round(
      Math.random() * 1000,
    )}`,
  };

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    userBook[key] = value;
  });

  booksApi
    .createBook(userBook)
    .then(book => {
      const markup = templateBook(book);
      refs.bookListElem.insertAdjacentHTML('beforeend', markup);
    })
    .catch(errorHandler)
    .finally(hideLoader);

  e.target.reset();
}

function handleUpdateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const userBook = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    if (value) {
      userBook[key] = value;
    }
  });

  booksApi
    .updateBook(userBook)
    .then(book => {
      const oldBookElem = refs.bookListElem.querySelector(
        `[data-id="${book.id}"]`,
      );

      const markup = templateBook(book);
      oldBookElem.insertAdjacentHTML('afterend', markup);

      oldBookElem.remove();
    })
    .catch(errorHandler);

  e.target.reset();
}

function handleResetBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userBook = {
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
    img: `https://picsum.photos/1280/720?random=${Math.round(
      Math.random() * 1000,
    )}`,
  };

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    userBook[key] = value;
  });

  booksApi
    .resetBook(userBook)
    .then(book => {
      const oldBookElem = refs.bookListElem.querySelector(
        `[data-id="${book.id}"]`,
      );

      const markup = templateBook(book);
      oldBookElem.insertAdjacentHTML('afterend', markup);

      oldBookElem.remove();
    })
    .catch(errorHandler);

  e.target.reset();
}
function handleDeleteBook(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;

  booksApi
    .deleteBook(id)
    .then(() => {
      const oldBookElem = refs.bookListElem.querySelector(`[data-id="${id}"]`);

      oldBookElem.remove();
    })
    .catch(errorHandler);
}
//!======================================================

booksApi.getBooks().then(renderBooks);

//!======================================================

function templateBook({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="${img}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

function renderBooks(books) {
  const markup = templateBooks(books);
  refs.bookListElem.innerHTML = markup;
}

// ===========================================
function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.bookListElem.classList.add('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.bookListElem.classList.remove('hidden');
}

function errorHandler(err) {
  iziToast.error({
    title: 'Упс щось пішло не так',
    message: err,
  });
}

//!======================================================
