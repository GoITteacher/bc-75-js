import * as usersApi from './modules/usersAPI.js';

//!======================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};

//!======================================================
refs.createUserForm.addEventListener('submit', handleCreateUser);
refs.updateUserForm.addEventListener('submit', handleUpdateUser);
refs.resetUserForm.addEventListener('submit', handleResetUser);
refs.userListElem.addEventListener('click', handleDeleteUser);

function handleCreateUser(e) {
  e.preventDefault();

  const user = {
    name: e.target.elements.userName.value,
    phone: e.target.elements.userPhone.value,
    email: e.target.elements.userEmail.value,
  };

  usersApi.createUser(user).then(user => {
    const markup = userTemplate(user);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function handleUpdateUser(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const id = formData.get('userId');
  const user = {
    name: formData.get('userName') || undefined,
    email: formData.get('userEmail') || undefined,
    phone: formData.get('userPhone') || undefined,
  };

  console.log(user);

  usersApi.updateUser(id, user).then(newUser => {
    const oldElem = refs.userListElem.querySelector(`[data-id="${id}"]`);
    const markup = userTemplate(newUser);
    oldElem.insertAdjacentHTML('afterend', markup);

    oldElem.remove();
  });

  e.target.reset();
}

function handleResetUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('userId');
  const user = {
    name: formData.get('userName'),
    email: formData.get('userEmail'),
    phone: formData.get('userPhone'),
  };

  usersApi.updateUser(id, user).then(newUser => {
    const oldElem = refs.userListElem.querySelector(`[data-id="${id}"]`);
    const markup = userTemplate(newUser);
    oldElem.insertAdjacentHTML('afterend', markup);

    oldElem.remove();
  });

  e.target.reset();
}

function handleDeleteUser(e) {
  if (e.target.dataset.type !== 'delete') return;
  const liElem = e.target.closest('li.user-item');
  const id = liElem.dataset.id;

  usersApi.deleteUser(id).then(() => {
    liElem.remove();
  });
}

//!======================================================

refs.userListElem.addEventListener('click', e => {
  if (e.target.dataset.type !== 'update') return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;

  refs.updateUserForm.elements.userId.value = id;
  refs.resetUserForm.elements.userId.value = id;
});

//!======================================================

document.addEventListener('DOMContentLoaded', () => {
  usersApi.getUsers().then(users => {
    const markup = usersTemplate(users);
    refs.userListElem.innerHTML = markup;
  });
});

//!======================================================
function userTemplate({ id, name, img, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://picsum.photos/1280/720?random=${id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${phone}</p>
  <p>Email: ${email}</p>
  <button class="btn button" data-type="update">UPDATE</button>
  <button class="btn button" data-type="delete">DELETE</button>
</li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n\n\n\n');
}
//!======================================================
