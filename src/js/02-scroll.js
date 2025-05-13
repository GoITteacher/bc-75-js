import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';
import { PAGE_SIZE } from './modules/constants';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};
//!======================================================
let query = '';
let currentPage = 1;
let maxPage = 1;

const observer = new IntersectionObserver(handleLoadMore, {
  threshold: 0,
  rootMargin: '1500px',
});

//!======================================================
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  currentPage = 1;
  query = e.target.elements.query.value;
  const data = await searchArticles(query, currentPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.innerHTML = markup;
  maxPage = Math.round(data.totalResults / PAGE_SIZE);

  updateObserverStatus();
  showNotification();
  e.target.reset();
});

//!======================================================

async function loadMore() {
  currentPage += 1;
  const data = await searchArticles(query, currentPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  updateObserverStatus();
  showNotification();
}

//!======================================================

function handleLoadMore([entry], observer) {
  if (entry.isIntersecting) {
    loadMore();
  }
}

function updateObserverStatus() {
  console.log('updateObserverStatus', currentPage < maxPage);

  if (currentPage < maxPage) {
    observer.observe(refs.targetElem);
  } else {
    observer.unobserve(refs.targetElem);
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
