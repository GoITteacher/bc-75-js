const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

// ===========================================

refs.createFormElem.addEventListener('submit', onCreateFormSubmit);
refs.updateFormElem.addEventListener('submit', onUpdateFormSubmit);
refs.resetFormElem.addEventListener('submit', onResetFormSubmit);
refs.deleteFormElem.addEventListener('submit', onDeleteFormSubmit);

// ===========================================

// ===========================================

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
