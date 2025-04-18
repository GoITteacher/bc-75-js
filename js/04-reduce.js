/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
//!======================================================

// const numbers = [3, 7, 1, 6];

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 1);

// const filtered = numbers.reduce((arr, el) => {
//   if (el % 2 !== 0) {
//     arr.push(el);
//   }
//   return arr;
// }, []);

// console.log(filtered);

// function task1(numbers) {
//   let counter = 1;

//   const filtered = numbers.filter(el => {
//     console.log(counter++);
//     return el > 10;
//   });

//   const mult2 = filtered.map(el => {
//     console.log(counter++);
//     return el * 2;
//   });

//   return mult2;
// }

// function task2(numbers) {
//   let counter = 1;

//   let sum = 0;

//   const res = numbers.reduce((arr, el) => {
//     if (el > 10) {
//       arr.push(el * 2);
//     }
//     return arr;
//   }, []);
// }

// task2([12, 25, 33, 49, 34]);
//!======================================================

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = [100, 50, 150].reduce((sum, salary) => {
//   return sum + salary;
// }, []);

// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((sum, player) => {
//   return sum + player.timePlayed;
// }, 0);

//!======================================================

/**
 * Рахуємо загальну суму товарів кошика
//  */

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((sum, item) => {
//   return sum + item.price * item.quantity;
// }, 0);

// const arr = [
//   {
//     title: 'AUDI',
//     sales: [
//       { date: '12.01.2000', amount: 25 },
//       { date: '123', amount: 13 },
//       { date: '123', amount: 45 },
//     ],
//   },
//   {
//     title: 'AUDI',
//     sales: [
//       { date: '12.01.2000', amount: 25 },
//       { date: '123', amount: 13 },
//       { date: '123', amount: 45 },
//     ],
//   },
//   {
//     title: 'AUDI',
//     sales: [
//       { date: '12.01.2000', amount: 25 },
//       { date: '123', amount: 13 },
//       { date: '123', amount: 45 },
//     ],
//   },
// ];

// arr.reduce((totalSum, car) => {
//   const sum = car.sales.reduce(sum => {}, 0);
//   return totalSum + sum;
// });
