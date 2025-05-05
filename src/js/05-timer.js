/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

//!======================================================

// const timer = {
//   intervalId: null,
//   initTime: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     console.log('START');

//     this.isActive = true;

//     this.initTime = Date.now();

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const diff = currentTime - this.initTime;

//       const strTime = msToTime(diff);

//       this.tick(strTime);
//     }, 1000);
//   },

//   stop() {
//     this.isActive = false;
//     console.log('STOP');
//     clearInterval(this.intervalId);
//     this.tick('00:00:00');
//   },

//   tick(timeStr) {
//     clockface.textContent = timeStr;
//   },
// };

// startBtn.addEventListener('click', () => {
//   timer.start();
// });

// stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

//!======================================================
/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Повертає об'єкт з властивостями hours, mins, secs
 * - Адська копіпаста з stackoverflow 💩
 */

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function msToTime(ms) {
  const { hours, mins, secs } = getTimeComponents(ms);

  const hoursStr = pad(hours);
  const minsStr = pad(mins);
  const secsStr = pad(secs);

  return `${hoursStr}:${minsStr}:${secsStr}`;
}

//!======================================================

let intervalId = null;
let initTime;

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

function handleStart() {
  if (intervalId) return;

  const initTime = Date.now();

  intervalId = setInterval(() => {
    const diff = Date.now() - initTime;
    const str = msToTime(diff);
    clockface.textContent = str;
  });
}

function handleStop() {
  clearInterval(intervalId);
  intervalId = null;
  clockface.textContent = '00:00:00';
}
