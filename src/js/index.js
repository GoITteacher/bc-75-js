// import Axios from 'axios';

// const axios = Axios.create({
//   baseURL: '',
//   params: {
//     apiKey: '2112334564564',
//   },
// });

// function createSong1(song) {
//   const BASE_URL = 'http://localhost:3000';
//   const END_POINT = '/songs';

//   const url = `${BASE_URL}${END_POINT}`;

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const options = {
//     method: 'POST',
//     headers,
//     body: JSON.stringify(song),
//   };

//   return fetch(url, options).then(res => res.json());
// }
// function createSong1(song) {
//   const BASE_URL = 'http://localhost:3000';
//   const END_POINT = '/songs';

//   const url = `${BASE_URL}${END_POINT}`;

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const options = {
//     method: 'PATCH',
//     headers,
//     body: JSON.stringify(song),
//   };

//   return fetch(url, options).then(res => res.json());
// }

// function createSong(song) {
//   return axios.post('/songs', song).then(res => res.data);
// }

// function createSong(id, song) {
//   return axios.patch(`/songs/${id}`, song).then(res => res.data);
// }

// function searchNews() {
//   const params = {};
//   const headers = {};

//   return axios.get('/news', { params, headers }).then(res => res.data);
// }

//!======================================================
