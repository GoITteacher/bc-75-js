/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 *
 * - then, catch, finally
 */

//!======================================================

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();

//     if (random > 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 1000);
// });

//!======================================================

// function onFullfiled() {
//   console.log('Дякую, Ням ням');
// }
// function onRejected() {
//   console.log('Поверніть мої гроші');
// }

// p1.then(onFullfiled).catch(onRejected);

//!======================================================

// p1.then(() => {
//   console.log(1);
//   console.log(1);
//   console.log(1);
//   console.log(1);
// }).catch(() => {
//   console.log(1);
//   console.log(1);
//   console.log(1);
//   console.log(1);
// });

//!======================================================

// p1.then(onFullfiled, onRejected);

//!======================================================

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();

    if (random > 0.5) {
      resolve(random);
    } else {
      reject('Вибачайте, ми повернемо вам гроші');
    }
  }, 1000);
});

p1.then(userData => {
  if (userData > 0.7) {
    return Promise.reject('Sorry');
  }

  console.log(userData);
}).catch(error => {
  console.log(error);
});

//!======================================================

// const promise = new Promise((res, rej) => {
//   const rand = Math.round(Math.random() * 1000);

//   if (rand > 500) {
//     res(rand);
//   } else {
//     rej(rand);
//   }
// });

// promise
//   .then(num => {
//     console.log('🍾', num);
//   })
//   .catch(num => {
//     console.log('‼️', num);
//   });

//!======================================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   const rand = Math.round(Math.random() * 1000);
//   if (rand > 500) {
//     res(rand);
//   } else {
//     rej(rand);
//   }
// });

// const promise = new Promise((res, rej) => {
//   res(10);
// });

// promise
//   .then(num1 => {
//     console.log(num1);
//     return num1 * 2;
//   })
//   .catch(num4 => {
//     console.log(num4);
//   });
