/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

//!======================================================

// const arr = [1,2,4,5,6,1,32,5]

// for(let i =0;i<arr.length;i++){
//   i
// }

//!======================================================

// const user = {
//   name: 'awdawd',
//   balance: 123,
//   a: 123,
//   b: 123,
//   c: 123,
// };

// for (const i in user) {
// console.log(`user["${i}"]`);
// console.log(i, user[i]);
// user[i]
// }

//!======================================================

// const obj = {
//   q: 10,
//   w: 20,
//   t: 30,
// };

// const obj1 = {
//   a: 10,
//   b: 20,
//   c: 30,
//   __proto__: obj,
// };

// const obj2 = {
//   x1: 10,
//   name: 'vasya',
//   __proto__: obj1,
// };

// for (const key in obj2) {
//   console.log(key);
// }

//!======================================================

//? Object.keys()
//? Object.values()
//? Object.entries()

const obj = {
  q: 10,
  w: 20,
  t: 30,
};

const obj1 = {
  a: 10,
  b: 20,
  c: 30,
  __proto__: obj,
};

const obj2 = {
  x1: 10,
  name: 'vasya',
  __proto__: obj1,
};

// const arr = Object.values(obj2); // [10, 'vasya']

// for (const value of arr) {
//   console.log(value);
// }

//!======================================================

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// const keys = Object.keys(feedback);
// for (const key of keys) {
//   feedback[key] += 1;
// }
// console.log(feedback);

// let totalFeedback = 0;
// const values = Object.values(feedback);

// for (const item of values) {
//   totalFeedback += item;
// }

// console.log('totalFeedback: ', totalFeedback);
// !======================================================
// const user = {
//   name: 'awdawd',
//   balance: 123,
//   a: 123,
//   b: 123,
//   c: 123,
// };

// const arr = Object.entries(user);
/* 
[
  ['name', 'awdawdawd'],
  ['balance', 123],
  ['a', 123],
  ['b', 123],
  ['c', 123],
]
*/

// for (const item of arr) {
//   const key = item[0];
//   const value = item[1];
//   console.log(key, value);
// }
