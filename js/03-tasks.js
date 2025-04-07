/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 25;

// function time2Str(h, m) {
//   if (m !== 0) {
//     return `${h} г. ${m} хв.`;
//   } else {
//     return `${h} г.`;
//   }
// }

// function time2Str(h, m) {
//   let message = `${h} г.`;

//   if (m !== 0) {
//     message += ` ${m} хв.`;
//   }

//   return message;
// }

// function time2Str(h, m) {
//   return m !== 0 ? `${h} г. ${m} хв.` : `${h} г.`;
// }
// // debugger;
// const time = time2Str(hours, minutes);

// console.log(time);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }
