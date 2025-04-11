/**
 * - Стек викликів
 * - Порядок виконання
 */

// function foo1() {
//   console.log('start');

//   foo2();

//   console.log('end');
// }

// function foo2() {
//   for (let i = 0; i < 3; i++) {
//     sayHello();
//   }
// }

// function sayHello() {
//   console.log('Hello');
// }

// foo1();

//!======================================================

// function foo1() {
//   console.log('s1');
//   foo2();
//   console.log('e1');
// }

// function foo2() {
//   console.log('s2');
//   foo3();
//   console.log('e2');
// }

// function foo3() {
//   console.log('s3');
//   console.log(awdawdawdawdawdawd);
//   console.log('e3');
// }

// foo1();

//!======================================================

// function foo(i) {
//   console.log(i);
//   foo(i + 1);
// }

// foo(1);

//!======================================================

// function fibba(x) {
//   if (x <= 2) {
//     return 1;
//   }

//   return fibba(x - 1) + fibba(x - 2);
// }

// console.log(fibba(7));

//!======================================================
