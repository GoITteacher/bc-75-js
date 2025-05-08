import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
import './modules/jobs';

//!======================================================

// function fetchPokemon(offset) {
//   const BASE_URL = 'https://pokeapi.co/api/v2';
//   const END_POINT = '/pokemon';

//   const params = new URLSearchParams({
//     limit: 5,
//     offset: offset,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url);
// }

// fetchPokemon(0);
// fetchPokemon(20);

//!======================================================

// function fetchNews(query) {
//   const BASE_URL = 'https://newsapi.org/v2';
//   const END_POINT = '/everything';
//   const params = new URLSearchParams({
//     q: query,
//     apiKey: 'c8747511a2c34730a83caaff4f3693e7',
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url).then(res => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error('Упс! Щось пішло не так...');
//     }
//   });
// }

// function fetchNews(query) {
//   const BASE_URL = 'https://newsapi.org/v2';
//   const END_POINT = '/everything';
//   const params = new URLSearchParams({
//     q: query,
//     apiKey: 'c8747511a2c34730a83caaff4f3693e7',
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url).then(res => res.json());
// }
//!======================================================

/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Volodka',
    },
  };

  return fetch(url, options).then(res => res.json());
} */

//!======================================================
