/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

/*
 * Функції
 */

//!======================================================
function showNotification() {
  console.log('OPEN');
  notification.classList.toggle('is-visible');

  timeoutId = setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  console.log('CLOSE');
  notification.classList.toggle('is-visible');
  clearTimeout(timeoutId);
}
//!======================================================

setTimeout(() => {
  showNotification();
}, NOTIFICATION_DELAY);

//!======================================================

notification.addEventListener('click', hideNotification);
