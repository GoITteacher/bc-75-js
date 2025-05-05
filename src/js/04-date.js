/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const d1 = new Date();
// const d1 = new Date('2025-05-01');
// const d1 = new Date('01.05.2025');
// const d1 = new Date('01/01/2025');
// const d1 = new Date('2025-01-25');
// const d1 = new Date('2025/01/01');
// const d1 = new Date('2025-05-01 12:25:01');
// const d1 = new Date(25000);
// const d1 = new Date(345345435);
// const d1 = new Date(25000);

//!======================================================

// const currentDay = new Date('2025-01-05');

// currentDay.setHours(0);

// console.log(currentDay.toISOString());

// currentDay.setFullYear(2027);
// currentDay.setMonth(2);
// currentDay.setDate(26);
// currentDay.setHours(12);
// currentDay.setMinutes(33);
// currentDay.setSeconds(33);

// currentDay.getFullYear()
// currentDay.getMonth()
// currentDay.getDate()
// currentDay.getFullYear()

// console.log(currentDay.getDay());

// const currentDay = new Date();
// currentDay.setHours(55);

// currentDay.setMinutes(999);

// currentDay.setMonth(55);

// currentDay.setDate(currentDay.getDate() - 20);
//!======================================================

// const d1 = new Date('2025-05-01 15:30:22');

// const d2 = new Date('2025-05-01 15:30:28');

// console.log(d2 - d1);

//!======================================================

// const start = Date.now();

// setInterval(() => {
//   const currentDate = Date.now();

//   console.log(((currentDate - start) / 1000).toFixed(0));
// }, 1000);

//!======================================================

// const userDate = '2025-01-08';

// const myDate = new Date(userDate);

// console.log(myDate.toISOString());
