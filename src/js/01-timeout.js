/*
 * Метод window.setTimeout(callback, delay, args)
 */
//!======================================================

// setTimeout(()=>{}, 5000);
// console.log('START');

// setTimeout(function t1() {
//   console.log('Hello1');
// }, 0);

// setTimeout(function t2() {
//   console.log('Hello2');
// }, 0);

// setTimeout(function t3() {
//   console.log('Hello3');
// }, 0);

// for (let i = 0; i < 100000; i++) {
//   console.log('TEST');
// }
// console.log('END');

//!======================================================

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const t1 = setTimeout(() => {
//   console.log('Hello1');
// }, 1000);

// const t2 = setTimeout(() => {
//   console.log('Hello2');
// }, 1000);

// const t3 = setTimeout(() => {
//   console.log('Hello3');
// }, 1000);

// clearTimeout(t2);

//!======================================================

/**
 * Можливість передати параметри для колбеку
 */

// const id = setTimeout((name, country) => {
//   console.log(`Hello, my name is ${name}, I'm from ${country}`);
// }, 1000);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     myCallback(i, 'Hello');
//   }, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(myCallback, i * 1000, 'Hello', i);
// }

// function myCallback(x, y) {
//   console.log(y, x);
// }
