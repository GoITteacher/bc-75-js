/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const btnElem = document.querySelector('.js-click');

/* 
    onTargetEvent - onBtnClick, onBtnFocus, onBtnBlur
    handleTargetEvent - handleBtnClick, handleBtnFocus, handleBtnBlur
    targetEventHandler - btnClickHandler, btnFocusHandler, btnBlurHandler
*/
//!======================================================
// btnElem.addEventListener('click', handleMyBtnClick1);
// btnElem.addEventListener('click', handleMyBtnClick2);
// btnElem.addEventListener('click', handleMyBtnClick3);

// function handleMyBtnClick1(e) {
//   console.log('click1');
// }

// function handleMyBtnClick2(e) {
//   console.log('click2');
// }

// function handleMyBtnClick3(e) {
//   console.log('click3');
// }

// btnElem.removeEventListener('click', handleMyBtnClick3);

//!======================================================

// btnElem.addEventListener('click', e => {
//   console.log('Hello click');
// });

// btnElem.removeEventListener('click');

//!======================================================

const btnElem = document.querySelector('.js-click');
const boxElem = document.querySelector('.js-box');

const boxPosition = {
  x: 100,
  y: 100,
};

let speedX = 50;
let speedY = 10;

btnElem.addEventListener('click', handleBtnClick);

function handleBtnClick(e) {
  boxPosition.x += speedX;
  boxPosition.y += speedY;

  boxElem.style.left = boxPosition.x + 'px';
  boxElem.style.top = boxPosition.y + 'px';
}
