/*
 * Створюємо та додаємо колекцію
 */

const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */
//!======================================================
// function colorTemplate(colorInfo) {
//   const liElem = document.createElement('li');
//   liElem.classList.add('color-picker__option');
//   liElem.style.backgroundColor = colorInfo.color;
//   return liElem;
// }

// function colorsTemplate(colors) {
//   return colors.map(colorTemplate);
// }

// const elems = colorsTemplate(options);

// colorPickerContainerEl.append(...elems);

//!======================================================

// const items = [];

// for (const item of options) {
//   const liElem = document.createElement('li');
//   liElem.classList.add('color-picker__option');
//   liElem.style.backgroundColor = item.color;

//   items.push(liElem);
// }

// colorPickerContainerEl.append(...items);

//!======================================================
// function carTemplate(car) {}
// function carsTemplate(cars) {}

// function userTemplate(user) {}
// function usersTemplate(users) {}
