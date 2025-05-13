import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { articlesTemplate } from './templates/render-functions.js';
import { searchArticles } from './modules/newsAPI.js';
import { PAGE_SIZE } from './modules/constants.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

//!======================================================

let query = '';
let currentPage = 1;
let maxPage = 1;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  currentPage = 1;
  query = e.target.elements.query.value;

  showLoader();
  changeBtnState(false);
  try {
    const data = await searchArticles(query, currentPage);
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.innerHTML = markup;
    maxPage = Math.round(data.totalResults / PAGE_SIZE);
    console.log(maxPage);
  } catch (err) {
    iziToast.error(err);
    maxPage = 0;
    refs.articleListElem.innerHTML = '';
  }

  checkBtnStatus();
  hideLoader();
  showNotification();

  e.target.reset();
});

//!======================================================

refs.btnLoadMore.addEventListener('click', async e => {
  currentPage += 1;

  showLoader();
  changeBtnState(false);

  const data = await searchArticles(query, currentPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  checkBtnStatus();
  hideLoader();
  showNotification();
});

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

//!======================================================
function changeBtnState(state) {
  refs.btnLoadMore.disabled = !state;
}

function checkBtnStatus() {
  if (currentPage < maxPage) {
    changeBtnState(true);
  } else {
    changeBtnState(false);
  }
}

//!======================================================

function showNotification() {
  if (currentPage === 1 && currentPage !== maxPage && maxPage !== 0) {
    iziToast.info({
      message: `Всього знайдено елементів: ${maxPage * PAGE_SIZE}`,
    });
  }

  if (currentPage === maxPage) {
    iziToast.info({ message: 'Ви дійшли кінця колекції' });
  }

  if (maxPage === 0) {
    iziToast.info({ message: 'нічого не знайдено' });
  }
}
