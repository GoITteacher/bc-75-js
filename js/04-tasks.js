// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання.
// Об'єкт task, який буде містити властивості Name, deadline, priority та status.
// Додайте методи для відмітки завдання як виконаного та для виведення
// інформації про завдання.

// function createTask(name, deadline, priority) {
//   const task = {
//     name: name,
//     deadline: deadline,
//     priority: priority,
//     status: false,

//     changeStatus() {
//       this.status = !this.status;
//     },

//     showInfo() {
//       const info = `=====================
// Name: ${this.name},
// Deadline: ${this.deadline},
// Priority: ${this.priority},
// Status: ${this.status ? 'Виконано' : 'Не виконано'}
// =====================`;

//       console.log(info);
//     },
//   };

//   return task;
// }

// const task1 = createTask('Дипломна робота', '23.08', 'Високий');
// const task2 = createTask('Дипломна робота', '23.08', 'Високий');
// const task3 = createTask('Дипломна робота', '23.08', 'Високий');
// const task4 = createTask('Дипломна робота', '23.08', 'Високий');

//!======================================================

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з
// властивостями назва, ціна та кількість. Додайте методи для додавання товару,
// видалення товару та підрахунку загальної вартості.

// const productManager = {
//   version: '1.0.0',
//   products: [{ name: 'Apple', price: 25, amount: 10 }],

//   addProduct(name, price, amount) {
//     const product = { name, amount, price };
//     this.products.push(product);
//   },

//   removeProduct(productName) {
//     for (let i = 0; i < this.products.length; i++) {
//       if (this.products[i].name === productName) {
//         this.products.splice(i, 1);
//         break;
//       }
//     }
//   },

//   showTotalPrice() {
//     let total = 0;

//     for (const product of this.products) {
//       total += product.price * product.amount;
//     }

//     console.log(`Total price: ${total}`);
//   },
// };

// productManager.addProduct({ name: 'Apple1', price: 25, amount: 10 });
// productManager.addProduct({ name: 'Apple2', price: 29, amount: 8 });
// productManager.addProduct({ name: 'Apple3', price: 11, amount: 25 });
// productManager.addProduct({ name: 'Apple4', price: 454, amount: 3 });

// productManager.showTotalPrice();

// productManager.removeProduct('Apple3');

// productManager.showTotalPrice();
//!======================================================
// ```
// Написати систему контролю банку.

// Властивості:
// - список користувачів {userId, FIO, city}
// - список рахунків {userId, accountNumber, balance}

// Методи:
// - додати користувача
// - видалити користувача

// - створити рахунок
// - видалити рахунок

// - додати гроші на рахунок
// - зняти гроші з рахунка
// ```;

const MonoBankV2 = {
  users: [],
  accounts: [],

  createUser(firstname, lastname, city) {
    const user = {
      userId: `${firstname}_${lastname}`,
      firstname,
      lastname,
      city,
    };

    this.users.push(user);
    this.createAccount(user.userId);
  },

  createAccount(userId) {
    const account = {
      accountId: `${userId}_${this.accounts.length}`,
      userId,
      balance: 0,
    };
    this.accounts.push(account);
  },

  removeUser(userId) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId === userId) {
        this.users.splice(i, 1);
        break;
      }
    }
  },

  removeUsersAccount(userId) {
    const res = [];
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].userId !== userId) {
        res.push(this.accounts[i]);
      }
    }
    this.accounts = res;
  },

  removeAccount(accountId) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountId === accountId) {
        this.accounts.splice(i, 1);
        break;
      }
    }
  },

  deposit(accountId, amount) {
    for (const account of this.accounts) {
      if (account.accountId === accountId) {
        account.balance += amount;
        break;
      }
    }
  },

  withdraw(accountId, amount) {
    for (const account of this.accounts) {
      if (account.accountId === accountId) {
        account.balance -= amount;
        break;
      }
    }
  },
};

MonoBankV2.createUser('Volodymyr', 'Pashchenko', 'Dnipro');
MonoBankV2.createUser('Eleonora', 'Pashchenko', 'Dnipro');
MonoBankV2.createUser('Valeriy', 'Pashchenko', 'Dnipro');

MonoBankV2.deposit('Volodymyr_Pashchenko_0', 500);
MonoBankV2.deposit('Volodymyr_Pashchenko_0', 500);
MonoBankV2.deposit('Volodymyr_Pashchenko_0', 500);

MonoBankV2.removeUser('Volodymyr_Pashchenko');

console.table(MonoBankV2.users);
console.table(MonoBankV2.accounts);
