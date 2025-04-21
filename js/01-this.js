/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */
//!======================================================

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log('foo -> this', this);
// }

// foo();

//!======================================================
/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     // let arguments = [10,20,30];
//     // let this = user;
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag(10, 20, 30);

//!======================================================

/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

// function showTag() {
//   //this
//   console.log('Tag', this.tag);
// }

// const mango1 = {
//   tag: 'Mango1',
//   showTag: showTag,
// };

// const mango2 = {
//   tag: 'Mango2',
//   showTag: showTag,
// };

// const mango3 = {
//   tag: 'Mango3',
//   showTag: showTag,
// };

// mango1.showTag();
// mango2.showTag();
// mango3.showTag();

//!======================================================

/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// poly.showTag();

// const foo = poly.showTag;

// foo();

//!======================================================
/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// function invokeAction(action) {
//   action();
// }

// invokeAction(jacob.showTag);

// jacob.showTag();

// !======================================================

// function foo() {
//   console.log(this);
// }

// const copyFoo = foo;

// const obj = {
//   copyFoo,
// };

// const copyFoo2 = obj.copyFoo;

// function test(callback) {
//   const user = {
//     name: 'Vasya',
//     show: callback,
//   };

// show();
// }

// test(copyFoo2);

//!======================================================
