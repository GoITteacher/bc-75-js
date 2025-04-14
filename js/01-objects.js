/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */
//!======================================================

// const product = ['Iphone', 1300, 250, 16 ,'red'];

// const product = {
//   name: 'Iphone',
//   price: 1300,
//   memory: 250,
//   camera: 16,
//   color: 'red',
// };

// const powerbank = {
//   model: '',
//   price: '',
// };

//!======================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   isFavourite: true,
// };

// const playlist = {
//   b: 1,
//   c: 30,
//   e: 40,
//   d: 50,
//   a: 2,
// };

// console.log(playlist);

// const user = {
//   fullname: 'Vasya',
//   age: 25,
//   isStudent: true,
//   address: {
//     city: 'Dnipro',
//     street: 'Test',
//     country: 'Ukraine',
//     index: '49000',
//     location: {
//       lan: 0.1231234,
//       lon: 0.1234331,
//     },
//   },
// };

// console.log(user);
// console.log(user.fullname);
// console.log(user.age);

// console.log(user.address.city);
// console.log(user.address.country);
// console.log(user.address);

// console.log(user.address.location.lan);

// const message = {
//   update_id: 937119701,
//   message: {
//     message_id: 1959346,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//       is_premium: true,
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1744614996,
//     text: 'Hello world',
//   },

//   i: 10,
// };

// message.message;

// const i = 'update_id';

// message['message'].chat['username'];
// message['message']['chat']['username'];
// message['message']['chat']['username']

// console.log();

//!======================================================
// const user = {
//   fullname: 'Vasya',
//   age: 25,
//   isStudent: true,
//   address: {
//     city: 'Dnipro',
//     street: 'Test',
//     country: 'Ukraine',
//     index: '49000',
//     location: {
//       lan: 0.1231234,
//       lon: 0.1234331,
//     },
//   },
// };

// const fullname = 'Roman';
// console.log(fullname);
// console.log(user.fullname);
// console.log(user['fullname']);
// console.log(user.fullname);

// const key = 25;
// console.log(user['25']);
// console.log(user);

//!======================================================
// const user = {
//   fullname: 'Vasya',
//   age: 25,
//   isStudent: true,
//   address: {
//     city: 'Dnipro',
//     street: 'Test',
//     country: 'Ukraine',
//     index: '49000',
//     location: {
//       lan: 0.1231234,
//       lon: 0.1234331,
//     },
//   },
// };

// const address = user['address'];

// location['lan']
// user.age = 30;
// user.age += 5;
// user.age++;
// user.isStudent = !user.isStudent;
// user.address.index = '49500';

// user.balance = {};
// user.balance.uah = 300;
// console.log(user);

// user['test'] = 'Hello world';
// const propertyName = 'tracks';

// user[propertyName] = 'TEST VALUE';
// console.log(user);

//!======================================================

function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

//!======================================================
