import Axios from 'axios';

// axios.defaults.baseURL = '';
// axios.defaults.params = {};

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  params: {},
  header: {},
});

export function getBooks() {
  const res = axios.get('/books');
  return res
    .then(res => res.data)
    .catch(() => {
      return Promise.reject('Під час отримання даних сталась помилка.');
    });
}

export function createBook(book) {
  const response = axios.post('/books', book);
  return response
    .then(res => res.data)
    .catch(() => {
      return Promise.reject('Під час створення сталась помилка.');
    });
}

export function updateBook({ id, ...book }) {
  const response = axios.patch(`/books/${id}`, book);
  return response
    .then(res => res.data)
    .catch(() => {
      return Promise.reject('Під час оновлення сталась помилка.');
    });
}

export function resetBook({ id, ...book }) {
  const response = axios.put(`/books/${id}`, book);
  return response
    .then(res => res.data)
    .catch(() => {
      return Promise.reject('Під час перезапису сталась помилка.');
    });
}

export function deleteBook(id) {
  const response = axios.delete(`/books/${id}`);
  return response
    .then(res => res.data)
    .catch(() => {
      return Promise.reject('Під час видалення сталась помилка.');
    });
}
