/**
 * Оператор switch
 */

// const username = 'Mango';

// switch (username) {
//   case 'Mango':
//     console.log();
//     break;

//   case 'Kiwi':
//     break;

//   case 'Test':
//     break;

//   case 'Vasya':
//     break;

//   case 'Kolya':
//     break;
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */
//!======================================================
const daysUntilDeadline = 1;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Today');
//     break;

//   case 1:
//     console.log('Tomorrow');
//     break;

//   case 2:
//     console.log('Overmorrow');
//     break;

//   default:
//     console.log('Date in the future');
//     break;
// }
//!======================================================\

// const dayOfWeek = 7;

// switch (dayOfWeek) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('Будній день');
//     break;

//   case 6:
//   case 7:
//     console.log('Вихідні');
//     break;
// }

//!======================================================
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// const option = 3;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар з 9 до 18 у відділені';
//     break;

//   case 2:
//     message = 'курєр доставить ваше замовлення на протязі дня';
//     break;

//   case 3:
//     message = 'Посилка приїде через день';
//     break;

//   default:
//     message = 'Вам зателефонує менеджер';
//     break;
// }

// console.log(message);
