/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

// const userNameElem = document.querySelector('.js-user-name');

// userNameElem.addEventListener('input', handleUserNameInput);
// userNameElem.addEventListener('blur', handleUserNameBlur);
// userNameElem.addEventListener('focus', handleUserNameInput);

// function handleUserNameInput(e) {
//   const value = userNameElem.value;
//   const len = value.length;

//   if (len > 6) {
//     userNameElem.classList.add('valid');
//     userNameElem.classList.remove('invalid');
//   } else {
//     userNameElem.classList.add('invalid');
//     userNameElem.classList.remove('valid');
//   }
// }

// function handleUserNameBlur() {
//   userNameElem.classList.remove('invalid');
//   userNameElem.classList.remove('valid');
// }

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

//!======================================================

// const checkElem = document.querySelector('.js-user-checkbox');

// checkElem.addEventListener('change', () => {
//   console.log('CHANGE');
// });
