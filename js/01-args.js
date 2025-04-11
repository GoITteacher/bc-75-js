/**
 * Псевдомасив arguments и Array.from
 */

// function sum(x, y) {
// for (const item of arguments) {
//   console.log(item);
// }

// for (let i = 0; i < arguments.length; i += 2) {
//   console.log(arguments[i]);
// }
// }

// sum(10, 20, 30, 40);
//!======================================================

// function foo() {
//   const args = Array.from(arguments);
// }

// foo(10, 203, 4, 5, 1, 23);

//!======================================================
// sum(10, 25);
// sum(10, 25, 33);

// const arr = [];
// arr.push(10);
// console.log(arr);

// const max = Math.max(10, 204, 12, 5, 2, 2, 223, 5, 6, 12, 3);
// console.log(max);

//!======================================================

//!======================================================
/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   const args = Array.from(arguments);

//   let total = 0;

//   for (const item of args) {
//     total += item;
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// console.log(add());
// console.log(add(1, 1, 1, 1, 11, 1, 11, 1, 11, 1, 1, 11, 1, 1, 1));
//!======================================================
/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const arr = Array.from(arguments);
//   let total = 0;

//   for (const item of arr) {
//     total += item;
//   }

//   return total / arr.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
