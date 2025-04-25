/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */
//!======================================================
// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   console.log('ADD CLASS');
//   boxRef.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', () => {
//   console.log('remove CLASS');
//   boxRef.classList.remove('box--active');
// });

//!======================================================

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mousemove', e => {
  const x = e.x - 150;
  const y = e.y - 150;

  boxRef.firstElementChild.style.left = x + 'px';
  boxRef.firstElementChild.style.top = y + 'px';
});
