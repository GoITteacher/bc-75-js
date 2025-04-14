// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.

const person = {
  name: 'Vasya',
  age: 25,
  proffesion: 'Developer',
};

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person.name);

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

person.age = 23;

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.

person.job = 'Full stack';

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.
//!======================================================

// for (const key of Object.keys(person)) {
//   console.log(`${key} - ${person[key]};`);
// }

//!======================================================

/**
 * У нас є об'єкт, де зберігаються чисельність населення кожного штату. Напишіть код для
 * підсумовування всього населення і збережіть результат у змінній sum.
 * Якщо об'єкт statesPopulation порожній, то результат має бути 0.
 */

// const statesPopulation = {
//   California: 39538223,
//   Texas: 29145505,
//   Florida: 21538187,
//   NewYork: 20201249,
//   Pennsylvania: 13002700,
// };

// let sum = 0;

// const values = Object.values(statesPopulation);

// for (const population of values) {
//   sum += population;
// }

// console.log(sum);
