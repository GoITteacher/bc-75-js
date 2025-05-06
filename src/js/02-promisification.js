/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// function createPromise(delay, isActive, value) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });

//   return promise;
// }

// for (let i = 0; i < 10; i++) {
//   const rand = Math.random() > 0.5;
//   const p1 = createPromise(i * 1000, rand, i + 1);
//   console.log(p1);

//   p1.then(res => {
//     console.log('🟢', res);
//   }).catch(res => {
//     console.log('🔴', res);
//   });
// }

//!======================================================

// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// const promise = fetch(url);

// promise
//   .then(res => {
//     console.log(res);
//     return res.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(() => {});

//!======================================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const promise = Promise.resolve('Hello world');
// const promise2 = Promise.reject('Hello world');

// promise.then(data => {
//   console.log(data);
// });

//!======================================================
// function foo() {
//   const arr = [1, 2, 3];

//   const promise = new Promise(resolve => {
//     resolve(arr);
//   });

//   return promise;
// }

// const arrPromise = foo();

// arrPromise.then(data => {
//   console.log(data);
// });

// Promise.reject(100);

//!======================================================

// function createPromise(delay, isActive, value) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise(3000, true, 'promise-1');
// const p2 = createPromise(2000, false, 'promise-2');
// const p3 = createPromise(5000, true, 'promise-3');
// const p4 = createPromise(1000, false, 'promise-4');
// const p5 = createPromise(4000, false, 'promise-5');

// const promises = [p1, p2, p3, p4, p5];

/* 
Promise.all - повертає першу помилку, або масив усіх виконаних промісів
Promise.allSettled - повертає масив обєктів з інформацією про статус виконання промісу і значенням
Promise.race - метод який повертає результат першого виконаного промісу
*/

// Promise.race(promises).then(data => {
//   console.log(data);
// });
