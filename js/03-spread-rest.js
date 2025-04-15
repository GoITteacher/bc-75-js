/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// const arr = [10, 20, 30, 45, 61];
// const obj = { x: 10, y: 20, q: 30 };

// const copy = [...arr];
// // const copy = [10, 20, 30, 45, 61];

//!======================================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const res = ['START', ...arr3, ...arr1, ...arr2, 'END'];

// console.log(res);

//!======================================================

// const numbers = [1, 3, 5, 56, 1, 2, 3, 5, 6, 2, 1];
// console.log(Math.max(...numbers));
// const obj = { x: 10, y: 20 };
// const arr = [...obj];

//!======================================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];

// const min = Math.min(...temps);
// const max = Math.max(...temps);

// console.log(min, max);

//!======================================================
/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log(a === b);

// a[0].x = 25;

// console.log(a);
// console.log(b);

//!======================================================
/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//!======================================================
/*
 * Створення об'єкта
 */

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objB,
//   ...objA,
// };

// console.log(objC);
//!======================================================

/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//!======================================================

// ? REST

//!======================================================

// function foo(...args) {
//   // args = [10, 20, 30, 40, 50]
//   console.log(...args);
// }

// foo(10, 20, 30, 40, 50);
