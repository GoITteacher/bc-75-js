import iziToast from 'izitoast';
import 'iziToast/dist/css/iziToast.min.css';

//!======================================================
/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.item-container');
const result = document.querySelector('.result');

// function getSmile(delaySeconds) {
//   const promise = new Promise((resolve, reject) => {
//     const isPositiveSmile = Math.random() > 0.5; // true || false
//     setTimeout(() => {
//       if (isPositiveSmile) {
//         resolve('🤑');
//       } else {
//         reject('👿');
//       }
//     }, delaySeconds * 300);
//   });

//   return promise;
// }

// startBtn.addEventListener('click', () => {
//   result.textContent = '';
//   const promises = [];

//   for (let i = 0; i < 3; i++) {
//     container.children[i].textContent = '';
//     const promise = getSmile(i);

//     promise
//       .then(smile => {
//         container.children[i].textContent = smile;
//       })
//       .catch(smile => {
//         container.children[i].textContent = smile;
//       });

//     promises.push(promise);
//   }

//   Promise.all(promises)
//     .then(() => {
//       result.textContent = 'Ви виграли!';
//     })
//     .catch(() => {
//       result.textContent = 'Спробуйте ще раз. Наступного разу вам пощастить)';
//     });
// });

//!======================================================

function getSmile(delaySeconds, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(delaySeconds);
      } else {
        reject(delaySeconds);
      }
    }, delaySeconds);
  });

  return promise;
}

startBtn.addEventListener('click', () => {
  const delay = 100;
  const isActive = Math.random() > 0.5;

  getSmile(delay, isActive)
    .then(s => {
      iziToast.success({
        title: 'OK',
        message: `Successfully inserted record! ${s}`,
      });
    })
    .catch(s => {
      iziToast.error({
        title: 'Error',
        message: `Illegal operation ${s}`,
      });
    });
});
