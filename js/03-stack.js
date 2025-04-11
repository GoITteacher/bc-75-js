/**
 * - Стек викликів
 * - Порядок виконання
 */

function foo1() {
  console.log(1);
  foo2();
  console.log(3);
}

function foo2() {
  console.log('Start2');
  console.log('Stop2');
}

foo1();
foo1();
foo1();
