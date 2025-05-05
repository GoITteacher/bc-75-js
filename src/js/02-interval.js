/*
 * Метод setInterval(callback, delay, args)
 */

//!======================================================

// let counter = 0;

// setInterval(function () {
//   document.body.innerHTML = counter++;
// }, 1000);

//!======================================================

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

let counter = 0;
const intervalId = setInterval(() => {
  console.log(counter++);
}, 1000);

setTimeout(() => {
  console.log('CLEAR INTERVAL');
  clearInterval(intervalId);
}, 5000);
