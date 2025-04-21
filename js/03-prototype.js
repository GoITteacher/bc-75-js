/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

//!======================================================

// const objA = {
//   x1: 10,
//   x2: 20,
// };

// const objB = {
//   x1: 10,
//   x2: 20,
//   __proto__: objA,
// };

// const x = 10;
// x.toString();

// const y = true;
// y.toString();

// const arr = [1, 2, 3];

// console.log(arr);

// arr.filter();

//!======================================================

// const objA = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const objB = {
//   y1: 10,
//   y2: 20,
//   y3: 30,

//   __proto__: objA,
// };

// console.log(objB.x2);

// objB.x2 = 25;

// console.log(objA);

// !======================================================

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

/**
 * ----------------------------------------
 */
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

console.log(objA.hasOwnProperty('a'));
console.log(objA.a);

console.log(objA.hasOwnProperty('b'));
console.log(objA.b);

console.log(objA.hasOwnProperty('c'));
console.log(objA.c);

console.log(objA.hasOwnProperty('x'));
console.log(objA.x);

//!======================================================
