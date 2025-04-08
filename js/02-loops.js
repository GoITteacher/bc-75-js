/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */
//!======================================================
// console.log("Before");
// debugger;

// for (let i = 10; i < 20; i += 1) {
//   console.log(`Поливаю ${i} рядок`);
// }

// for (let i = 20; i > 10; i -= 1) {
//   console.log(`Поливаю ${i} рядок`);
// }

// for(let i = 5; i < 25; i+=1){}
// for(let i = 1; i < 21; i+=1){}
// for(let i = 0; i < 20; i+=1){}
// for(let i = 500; i < 520; i+=1){}
// for (let i = 1027; i < 1127; i++) {}
// for(let i = 1; i < 100; i+=3){
//     console.log(i);
// }

//!======================================================

// let x = 10;
// console.log(++x);
// x+=1;
// console.log(x);
// console.log(x);
// x+=1;
// let x = 10;
// const res = 5 + ++x;
// const res = 5 + x++;

//!======================================================

// let random = Math.round(Math.random() * 100); //57

// let userValue; // 60

// > 50
// < 75
// < 60
// < 60

// while (+userValue !== +random) {
//   userValue = prompt('Enter value:');// '57'
//   if (userValue > random) {
//     console.log('<');
//   } else if (userValue < random) {
//     console.log('>');
//   }
// }

// console.log(`Ви вгадали число ${random}`);

//!======================================================

// const salary = 2500;
// let currentSalary = 2600;

// for (let i = 1; i <= 3; i++) {
//   console.log('А можна трохи більше ЗП');
//   currentSalary += Math.round(Math.random() * 100);
//   console.log(`Окей! Тепер ваша зп - ${currentSalary}`);
// }

// while (currentSalary < salary) {
//   console.log('\n\nА можна трохи більше ЗП');
//   currentSalary += Math.round(Math.random() * 100);
//   console.log(`Окей! Тепер ваша зп - ${currentSalary}`);
// }

// do {
//   console.log('\n\nА можна трохи більше ЗП');
//   currentSalary += Math.round(Math.random() * 100);
//   console.log(`Окей! Тепер ваша зп - ${currentSalary}`);
// } while (currentSalary < salary);

// console.log(`Кінцева ЗП - ${currentSalary}`);

//!======================================================

// break
// continue

// function foo() {
//   return;
// }

// debugger;
// for (let i = 1; i < 1000000; i++) {
//   if (i % 3 === 0 && i % 7 === 0) {
//     console.log(i);
//     break;
//   }

//   console.log('Перевіряю наступне число');
// }

// debugger;
// for (let i = 0; i < 100; i++) {
//   if (i % 3 !== 0 || i % 7 !== 0) {
//     continue;
//   }
//   console.log(`Число - ${i}`);
// }

//!======================================================
