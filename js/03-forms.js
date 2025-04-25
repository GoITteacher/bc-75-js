/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');
const productsElem = document.querySelector('.js-product-list');

formElem.addEventListener('submit', onFormSubmit);

/* 
function onFormSubmit(e) {
  e.preventDefault();
  const email = formElem.elements.userEmail.value;
  const password = formElem.elements.password.value;
  const comment = formElem.elements.comment.value;
  const userData = { email, password, comment };
} */

/* 
function onFormSubmit(e) {
  e.preventDefault();
  const userData = {
    email: formElem.elements.userEmail.value,
    password: formElem.elements.password.value,
    comment: formElem.elements.comment.value,
  };
}
 */
/* 
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formElem);
  const email = formData.get('userEmail');
  const password = formData.get('password');
}
*/

/* 
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formElem);
  const userData = Object.fromEntries(formData.entries());
  console.log(userData);

  formElem.reset();
} */

//!======================================================
//!======================================================
//!======================================================

const products = [];

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formElem);
  const userData = Object.fromEntries(formData.entries());

  products.push(userData);

  const markup = productTemplate(userData);
  productsElem.insertAdjacentHTML('beforeend', markup);

  formElem.reset();
}

//!======================================================

function productTemplate(product) {
  return `<li class="product-item">
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Amount: ${product.amount}</p>
        <p>Date: ${product.date}</p>
      </li>`;
}
