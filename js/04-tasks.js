//!======================================================
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.

// function task1() {
//   const items = Array.from(arguments);

//   for (const item of items) {
//     if (typeof item != 'number') {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(task1(1, 2, 4, 6, 1, 2, 3, 5, 6, 2));
// console.log(task1(1, 3, 7, 1, 2, true, 123, 45, 2, 2, 3));

//!======================================================
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.

// function task2() {
//   const args = Array.from(arguments);
//   const res = args.join(',');
//   return res;
// }

// console.log(task2(1, 3, 5, 6, 2, 3, 4, 6));

//!======================================================

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.

// function task3() {
//   const numbers = Array.from(arguments);
//   let result = 1;

//   for (const item of numbers) {
//     result *= item;
//   }

//   return result;
// }

//!======================================================
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.

// function task4() {
//   const arr = Array.from(arguments);

//   let count = 0;

//   for (const item of arr) {
//     if (item % 2 !== 0) {
//       count += 1;
//     }
//   }

//   return count;
// }
// console.log(task4(1, 5, 5, 23, 2, 4, 32, 3));

//!======================================================
// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим

// function task6() {
//   const arr = Array.from(arguments);
//   let min = arr[0];

//   for (const str of arr) {
//     if (str.length <= min.length) {
//       min = str;
//     }
//   }

//   const minLen = min.length;
//   const result = [];

//   for (const item of arr) {
//     if (item.length === minLen) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(task6('Hello', 'World', 'test', 'task', 'less', 'word', 'lesson'));

//!======================================================

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function task7(arr1, arr2) {
//   const res = [];

//   for (const item of arr1) {
//     if (arr2.includes(item)) {
//       res.push(item);
//     }
//   }

//   return res;
// }

//!======================================================
// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function task8(users, blakcList) {
//   const res = [];

//   for (const user of users) {
//     if (!blakcList.includes(user)) {
//       res.push(user);
//     }
//   }

//   return res;
// }

// const arr1 = ['Roman', 'Nika', 'Tomila', 'Max', 'Vasya', 'Petya', 'Kolya'];
// const arr2 = ['Vasya', 'Petya'];
// console.log(task8(arr1, arr2));

//!======================================================
// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function task9(items) {
//   let min = items[0];

//   for (const item of items) {
//     if (item < min) {
//       min = item;
//     }
//   }

//   return min;
// }

// console.log(task9([23, 4, 56, 54, 33, 23, 34, 56, 6]));

//!======================================================
// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.

// function task10(arr) {
//   const oddNumbers = [];
//   const evenNumbers = [];

//   for (const item of arr) {
//     if (item % 2 === 0) {
//       evenNumbers.push(item);
//     } else {
//       oddNumbers.push(item);
//     }
//   }

//   return [].concat(evenNumbers, oddNumbers);
// }

// console.log(task10([7, 2, 9, 8, 3, 4]));

//!======================================================
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.

// function task11(items) {
//   const res = [];
//   for (let i = 0; i < items.length; i++) {
//     let sum = 0;
//     for(let j = 0; j <= i; j++){
//         sum += items[j];
//     }
//     res.push(sum)
//   }
//   return sum;
// }

// function task10(items) {
//   let res = [];

//   for (const item of items) {
//     const previousSum = res[res.length - 1] || 0;
//     res.push(item + previousSum);
//   }

//   return res;
// }

// task10([1, 3, 5, 6, 7, 4, 2, 2]);

//!======================================================
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.

// function task11(items) {
//   const res = [];

//   for (const item of items) {
//     const firstIndex = items.indexOf(item);
//     const lastIndex = items.lastIndexOf(item);
//     if (firstIndex === lastIndex) {
//       res.push(item);
//     }
//   }

//   return res;
// }

// console.log(task11([2, 5, 8, 2, 9, 3, 5]));
