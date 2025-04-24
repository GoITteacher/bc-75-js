/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const btnElem = document.querySelector('button');
// const ulElem = document.querySelector('.site-nav');
// const liElems = ulElem.querySelectorAll('li:nth-child()');

// console.log(liElems);

// document.getElementById('my-id');
// document.querySelector('#my-id');

//!======================================================

// const magicBtnElem =
// const formElem =
// const authFormElem =
// const ulElem

//!======================================================

// const liEems = document.querySelectorAll('.js-user-list > li');
// console.log(liEems);

//!======================================================
/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

/* 
elem.parentElement
elem.previousElementSibling
elem.nextElementSibling
elem.firstElementChild
elem.lastElementChild
*/

// const ulElem = document.querySelectorAll('ul');

// for (const child of ulElem.children) {
//   console.log(child);
// }

// console.log(ulElem.children[1]);

// console.log(ulElem.parentElement.firstElementChild.nextElementSibling);

//!======================================================
// const dom = {
//   html: {
//     head: {},
//     body: {
//       p: { a: {} },
//       button: {
//         span: {
//           textContent: 'Text',
//         },
//       },
//       img: {
//         src: '',
//         alt: '',
//         style: {},
//       },
//     },
//   },
// };

// dom.html.body.button.span.textContent = 'Hello world';
