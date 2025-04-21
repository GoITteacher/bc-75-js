/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!======================================================

// const user1 = {
//   name: 'Vasya',
//   showInfo(red, green, blue) {
//     console.log(this);
//   },
// };

// const user2 = {
//   name: 'Poly',
// };

// const user3 = {
//   name: 'Lolya',
// };

// const red = 10;
// const green = 95;
// const blue = 67;
// user1.showInfo.call(user2, red, green, blue);

// const rgb = [10, 96, 67];

// user1.showInfo.call(user2, rgb[0], rgb[1], rgb[2]);
// user1.showInfo.call(user2, ...rgb);
// user1.showInfo.apply(user2, rgb);

//!======================================================

// function changeColor(color) {
//   console.log('new Color', color);
//   this.color = color;
// }

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);
// console.log(hat);

// changeColor.call(hat, 'orange');
// changeColor.call(sweater, 'blue');

// console.log(sweater);
// console.log(hat);
//!======================================================

// const user = {
//   name: 'Vaysa',
//   showInfo() {
//     console.log(this);
//   },
// };

// const foo = user.showInfo.bind(user);

// foo();

// const user2 = {
//   name: 'Kolya',
//   copy: foo,
// };
// const user3 = {
//   name: 'Kolya',
//   copy: foo,
// };

// user2.copy.call(user3);

/* 
9 - bind user
7 - call, apply user3
4 - object user2
1 - windwon / undefined
*/

//!======================================================

//!======================================================
// function changeColor(color) {
//   console.log('new Color', color);
//   this.color = color;
// }

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// console.log(hat);
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// changeSweaterColor('red');

// console.log(hat);
// console.log(sweater);

/**
 * -------------------------------
 */
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//!======================================================

/* 
1. Визначаємо тип функції
- якщо це звичайна функція - шукаємо момент виклику
- якщо це стрілчата функція - то шукаємо де створюється і ,беремо контекст батьківської функції
*/

// function foo() {
//   const x1 = () => {
//     const x2 = () => {
//       const x3 = () => {
//         console.log(this);
//       };

//       x3();
//     };

//     x2();
//   };

//   x1();
// }

// foo.call('Hello');

//!======================================================

// function foo() {
//   const x = 10;
//   const y = 20;

//   const test = () => {
//     console.log(x, y);
//   };

//   return test;
// }

// const myValue = foo();

// debugger;
// myValue();

//!======================================================

// function createCalc(surname) {
//   const calc = (x1, x2) => {
//     console.log(surname, x1 + x2);
//   };
//   return calc;
// }

// const calc1 = createCalc('Vasya');
// const calc2 = createCalc('Polya');
// const calc3 = createCalc('Tolya');

// calc1(1, 5);
// calc1(2, 2);
// calc1(3, 9);
// calc1(4, 0);

// calc2(2, 6);
// calc2(2, 8);
// calc2(2, 2);
// calc2(2, 1);

//!======================================================

// function createCounter() {
//   let counter = 0;

//   const increment = () => {
//     //let counter = 0;
//     console.log(counter);
//     counter++;
//   };

//   return increment;
// }

// const increment1 = createCounter();
// const increment2 = createCounter();
// const increment3 = createCounter();

// increment1();
// increment1();

//!======================================================
