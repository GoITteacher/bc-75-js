/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!======================================================

// const user1 = {
//   name: 'Vasya',
//   age: 25,

//   sayHello(x) {
//     console.log(`Hello ${x}`);
//   },
//   showName() {
//     console.log(this.name);
//   },
//   showThis() {
//     console.log(this);
//   },
// };
// const user2 = {
//   name: 'Roman',
//   age: 25,

//   sayHello(x) {
//     console.log(`Hello ${x}`);
//   },
//   showName() {
//     console.log(this.name);
//   },
//   showThis() {
//     console.log(this);
//   },
// };

// user1.showThis();
// user2.showThis();

//!======================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   last: [],

//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
//   getLastTracks() {
//     return this.tracks.slice(-2);
//   },
// };

// console.log(playlist.getLastTracks());

// playlist.addTrack('new track 2');

// console.log(playlist.getLastTracks());
// playlist.updateRating(4);

// console.log(playlist);

//!======================================================

// Створи об'єкт із властивостями `movieTitle` (рядок), `director` (рядок) та
// `duration` (число, у хвилинах). Додай метод `getMovieInfo`, який повертає опис
// фільму у форматі: `[movieTitle], режисер [director], тривалість [duration] хв`.

// const obj = {
//   movieTitle: 'Avatar',
//   director: 'Mr X',
//   duration: 180,
//   getMovieInfo() {
//     return `${this.movieTitle}, режисер ${this.director}, тривалість ${this.duration} хв`;
//   },
// };

// console.log(obj.getMovieInfo());

//!======================================================

// Створи об'єкт із властивостями `day` (число), `month` (число) та `year` (число).
// Додай метод `formatDate`, який повертає рядок у форматі: `DD/MM/YYYY`.

// const obj = {
//   day: 1,
//   month: 11,
//   year: 2005,

//   formatDate() {
//     const dayStr = this.day.toString().padStart(2, '0');
//     const monthStr = this.month.toString().padStart(2, '0');
//     const yearStr = this.year.toString().padStart(4, '0');

//     return `${dayStr}/${monthStr}/${yearStr}`;
//   },
// };

// console.log(obj.formatDate());
