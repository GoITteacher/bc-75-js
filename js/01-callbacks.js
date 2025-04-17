/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

//!======================================================

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }

// function goToMusicSchool() {
//   console.log('Повернутись з муз школи');
//   console.log('Повернутись з муз школи');
// }

// function goToStore() {
//   console.log('Піти до магазину');
//   console.log('Повернутись з магазину');
// }

// function gotToGrandMa() {
//   console.log('Grand Ma');
// }

// function myDay(callback) {
//   console.log('\n\n\n');
//   console.log('Прокинутись');
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');
//   callback();
//   console.log('Лягти спати');
// }

// myDay(goToMusicSchool);
// myDay(gotToGrandMa);
// myDay(goToDanceSchool);
// myDay(goToStore);

//!======================================================
/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  console.log('\n\n\n\n');
  console.log('a = ', a);
  console.log('b = ', b);
  const res = callback(a, b);
  console.log(`res = ${res}`);
}

// function sum(x1, x2) {
//   return x1 + x2;
// }

// function diff(x1, x2) {
//   return x1 + x2;
// }

// function mult(x1, x2) {
//   return x1 + x2;
// }

// function sub(x1, x2) {
//   return x1 + x2;
// }

// calc(4, 7, function () {
//   console.log('Hello test1');
//   console.log('Hello test2');
//   return 10;
// });

// function foo1(y1, y2) {
//   return y1 + y2 + y2;
// }

// calc(4, 1, foo1);

//!======================================================

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const x = callback(array[i], i);
    res.push(x);
  }
  return res;
}

// function test(value) {
//   return value + 5;
// }

// function test2(value, index) {
//   return value + index;
// }

// console.log(each([2, 7, 3, 4], test2));

//!======================================================

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
