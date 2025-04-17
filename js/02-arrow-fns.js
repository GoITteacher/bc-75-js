/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!======================================================

// const arrowFn = (...args) => {
//   console.log(args);
// };

// arrowFn(1, 2, 4, 5, 12, 2);

//!======================================================

// const x = () => {};

// console.log(x);

//!======================================================

// const sum = (x, y) => {
//   console.log(x);
//   console.log(y);
//   console.log(x + y);
// };

// sum(10, 20);
//!======================================================
// const sum = x => {
//   console.log(x);
// };

// sum(10);
//!======================================================

// const sum = x => {
//   return x ** 2;
// };

// sum(10);

//!======================================================

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!======================================================

function fnA() {
  return {
    a: 5,
  };
}

// const arrowFnA = () => ({ a: 10 });

const arrowFnA = () => {
  return {};
};

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);
// calc(10, 8, (x, y) => x - y);
