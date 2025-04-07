/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false

// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean(30)); // true
// console.log(Boolean(-10.25)); // true

// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('undefined')); // true
// console.log(Boolean('null')); // true
// console.log(Boolean(' ')); // true

//!======================================================

/* 
Оператор && повертає першу брехню. Якщо брехні немає то повертає праву частинку.
*/

// console.log(5 && 4);
// console.log(5 && 'mango');
// console.log('Mango' && 'Kiwi' && "Test");
// console.log('Mango' && '' && 0);

//!======================================================

/* 
Оператор || повертає першу правду. Якщо правди немає то повертає праву частинку.
*/

// console.log(false || 5); // 5;
// console.log(false || null); // false
// console.log(0 || 'Kiwi' || 0 || 'Mango');

//!======================================================

// const userValue = prompt('Enter name');
// console.log(userValue);

// const user = userValue || 'Anonym';

// console.log(`Hello ${user}`);

//!======================================================
// const userAge = 12;
// const userBalance = 125;

// (userAge > 18 || userBalance > 100);

//!======================================================

/* 
Оператор && повертає першу брехню. Якщо брехні немає то повертає праву частинку.
*/

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); // 0

/* 
Оператор || повертає першу правду. Якщо правди немає то повертає праву частинку.
*/

// console.log(true || 3);// t

// console.log(true || 3 || 4);// t

// console.log(true || false || 7);// t

// console.log(null || 2 || undefined);// 2

// console.log((1 && null && 2) > 0); //f

// console.log(null || (2 && 3) || 4); //3

//!======================================================

// if(userBalance && userAge && userName || firstName || lastName){

// }

// if (((true && true) || false || true || (false && true && false)) && false) {
//   console.log('Hello');
// }

// ((1 * 1) + 0 + 1 + (0 * 1 * 0)) * 0 = 0

/* 
true - 1
false - 0
&& - множення
|| - додавання
*/

//!======================================================
const userBalance = 552;
const userAge = 12;
const userName = 'Test';
const firstName = 'Test';
const lastName = 'Test';

// if (userAge >= 18 || userBalance > 500) {
//   console.log('Hello');
// }

// const positiveBalance = userBalance > 500;
// const isAdult = userAge >= 18;

// const isValidName = userName.length > 3;
// const isValidFName = firstName.length > 3;
// const isValidLName = lastName.length > 3;
// const isValidInfo = isValidName && isValidFName && isValidLName;

// const result = positiveBalance && isAdult && isValidInfo;
// if (positiveBalance && isAdult && isValidInfo) {
// }
