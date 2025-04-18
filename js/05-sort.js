/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];

// const copy = numbers.toSorted((b, a) => {
//   return a - b;
// });

// console.log(copy);

//!======================================================

// const sorted = numbers;
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
//!======================================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 150, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 310, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 310, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 310, online: true },
// ];

// const copy = players.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// const copy = players.toSorted((a, b) => {
//   if (a.timePlayed !== b.timePlayed) {
//     return a.timePlayed - b.timePlayed;
//   }
//   return a.name.length - b.name.length;
// });

// console.table(copy);

//!======================================================

// // За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// По первой букве имени
// const byName = players;
// console.table(byName);

//!======================================================

// const res = 'hello'.localeCompare('world');

// console.log(res);

//!======================================================
//!======================================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 150, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 310, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 310, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 310, online: true },
// ];

// const res = players.toSorted((b, a) => {
//   return a.name.length - b.name.length;
// });

// const res = players.toSorted((a, b) => {
//   return a.online - b.online;
// });

// console.table(res);
