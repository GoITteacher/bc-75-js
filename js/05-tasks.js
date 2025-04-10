// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.

// function task1(items, userItem) {
//   let count = 0; //3

//   for (const item of items) {
//     if (item === userItem) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(task1([10, 1, 4, 2, 1, 3, 4, 2, 1], 1));
//!======================================================

// 2. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.

// const arr = [1, 2, 3, -5, 5, 1, -12, 3, 1, -23, -4];

// function getPositiveNumbers(items) {
//   const res = [];

//   for (const item of items) {
//     if (item > 0) {
//       res.push(item);
//     }
//   }

//   return res;
// }

// console.log(getPositiveNumbers(arr));

//!======================================================
// 3. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.

// function task3(arr) {
//   const res = [];

//   for (const item of arr) {
//     if (item.length < 5) {
//       res.push(item.toLowerCase());
//     } else {
//       res.push(item.toUpperCase());
//     }
//   }

//   return res;
// }

// console.log(task3(['Hello', 'World', 'Test', 'Alpha', 'Word']));

//!======================================================
