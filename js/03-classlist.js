/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

// const ulElem = document.querySelector('.js-site-nav');
// ulElem.firstElementChild.classList.add('active-item');

//!======================================================

// const ulElem = document.querySelector('.js-password-list');
// const liElems = [...ulElem.children];

// const invalidItems = liElems.filter(el => el.textContent.length < 6);

// for (const item of invalidItems) {
//   item.classList.add('invalid-password');
// }

//!======================================================

// const ulElem = document.querySelector('.js-password-list');
// const liElems = ulElem.querySelectorAll('li');

// for (let i = 1; i < liElems.length; i += 2) {
//   liElems[i].classList.add('invalid-password');
// }

// ulElem.lastElementChild.classList.remove('hidden');

//!======================================================

// const ulElem = document.querySelector('.js-password-list');
// ulElem.classList.add('active', 'valid', 'test');
// ulElem.classList.remove()

// setInterval(() => {
//   ulElem.classList.toggle('invalid-password');
// }, 3000);

//!======================================================

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');

//   if (document.body.classList.contains('dark-theme')) {
//     btn.textContent = 'Перемкнути на світлу тему';
//   } else {
//     btn.textContent = 'Перемкнути на темну тему';
//   }
// });

//!======================================================

// const ulElem = document.querySelector('.js-password-list');

// const items = [...ulElem.children];

// for (const liElem of items) {
//   const len = liElem.textContent.length;
//   liElem.style.width = `${len * 10}px`;
//   liElem.style.border = `3px solid black`;
//   liElem.style.color = `white`;
//   liElem.style.backgroundColor = `teal`;
// }

// for (const liElem of items) {
//   const red = Math.round(Math.random() * 255);
//   const green = Math.round(Math.random() * 255);
//   const blue = Math.round(Math.random() * 255);

//   liElem.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.3)`;
//   liElem.classList.add('my-item');
// }
