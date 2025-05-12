import axios from 'axios';

// axios.defaults.baseURL = 'https://newsapi.org/v2';

// function getNews(query) {
//   const params = {
//     q: query,
//     apiKey: 'c8747511a2c34730a83caaff4f3693e7',
//   };
//   const res = axios.get('/everything', { params }).then(res => res.data);
//   return res;
// }

// async function loadNews() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   const x = await getNews('Tesla');
//   console.log(x);
// }

// loadNews();

//!======================================================

// async function foo() {}

// async () => {};

// const foo2 = async () => {};

// const obj = {
//   async sayHello() {},
// };

// class User {
//   async showInfo() {}
// }

// document.addEventListener(async () => {});
// document.addEventListener(async function () {});

// [].map(async () => {});

//!======================================================

// async function foo() {
//   console.log(1);

//   const data = getNews('Bitcoin');
//   console.log(2, data);

//   console.log(4);
// }

// async function foo() {
//   console.log(1);

//   const data = await getNews('Bitcoin');
//   console.log(2, data);
//   console.log('2_1');

//   const data2 = await getNews('Bitcoin');
//   console.log(3, data2);
//   console.log('3_1');

//   console.log(4);
// }

//!======================================================

// async function foo() {
//   console.log(1);

//   try {
//     const data = await getNews('Bitcoin');
//     console.log(2, data);
//     console.log('2_1');
//   } catch {}

//   try {
//     const data2 = await getNews('awhfgashjeyf');
//     console.log(3, data2);
//     console.log('3_1');
//   } catch {}

//   console.log(4);
// }

//!======================================================

// function getPokemon(id) {
//   const baseURL = 'https://pokeapi.co/api/v2';
//   const url = `${baseURL}/pokemon/${id}`;
//   return axios.get(url);
// }

// async function getPokemons() {
//   const promises = [];

//   for (let i = 1; i <= 50; i++) {
//     const promise = getPokemon(i);
//     promises.push(promise);
//   }

//   const res = await Promise.all(promises);
//   console.log(res);
// }

// async function getUserInfo(username) {
//   const instPromise = getInstagramUser(username);
//   const tiktokPromise = getTiktokUser(username);
//   const fbPromise = getFBUser(username);
//   const xPromise = getXUser(username);

//   const promises = [instPromise, tiktokPromise, fbPromise, xPromise];

//   const userInfo = await Promise.all(promises);
// }

//!======================================================

// function getPokemons(offset, limit) {
//   const baseURL = 'https://pokeapi.co/api/v2';
//   const endPoint = '/pokemon';
//   const url = baseURL + endPoint;
//   const params = { limit, offset };
//   return axios.get(url, { params });
// }

// async function getPokemonInfo(name) {
//   const baseURL = 'https://pokeapi.co/api/v2';
//   const endPoint = `/pokemon/${name}`;
//   const url = baseURL + endPoint;
//   const res = await axios.get(url);
//   return res.data;
// }

// async function init() {
//   const res = await getPokemons(0, 100);
//   const pokemonsName = res.data.results.map(el => el.name);

//   const promises = pokemonsName.map(name => {
//     return getPokemonInfo(name);
//   });

//   const pokemons = await Promise.all(promises);
//   console.log(pokemons);
// }

// init();
