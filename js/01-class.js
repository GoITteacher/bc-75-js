/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
//!======================================================

// const obj1 = {};
// const obj2 = Object.create(obj1);

// class Student {
//   constructor(x, y, q) {
//     this.firstname = x;
//     this.secondname = y;
//     this.age = q;
//     this.balance = 0;
//   }

//   showFullName() {
//     console.log(this.firstname, this.secondname);
//   }

//   showInfo() {
//     console.log(this.firstname, this.secondname);
//   }

//   showFullName() {
//     console.log(this.firstname, this.secondname);
//   }

//   showFullName() {
//     console.log(this.firstname, this.secondname);
//   }
// }

// const student1 = new Student('Vasya', 'Test', 10);
// const student2 = new Student('Petya', 'Test', 10);
// const student3 = new Student('Kolya', 'Test', 10);

// student1.showFullName();
// student2.showFullName();

//!======================================================

// class Car {
//   #price;

//   constructor(model, price, color, amount) {
//     this.model = model;
//     this.#price = price;
//     this.color = color;
//     this.amount = amount;
//     this.discount = 0;
//     this.country = 'USA';
//     this.company = 'Tesla';
//     this.maxSpeed = 350;
//   }

//   showInfo() {
//     const info = `=====================
// Model: ${this.company} ${this.model};
// Color: ${this.color};
// Price: ${this.#price}$;
// Amount: ${this.amount};
// =====================`;
//     console.log(info);
//   }

//   updateDiscount(newDicsount) {
//     this.#price -= newDicsount;
//     this.discount = newDicsount;
//   }
// }

// const car1 = new Car('model S', 35000, 'black', 10);

// car1.showInfo();

// car1.showInfo();
//!======================================================

// class User {
//   #age;

//   constructor(userName, userAge, city, country) {
//     this.name = userName;
//     this.city = city;
//     this.counry = country;
//     this.#age = userAge >= 0 ? userAge : 0;
//   }

//   get age() {
//     return `Age: ${this.#age}`;
//   }

//   set age(x) {
//     if (x >= 0 && x < 100) {
//       this.#age = x;
//     }
//   }

//   get #nameStr() {
//     return `Name: ${this.name}`;
//   }
//   get #cityStr() {
//     return `City: ${this.city}`;
//   }

//   get #countryStr() {
//     return `Country: ${this.counry}`;
//   }

//   get info() {
//     const res = `
// ${this.#nameStr}
// ${this.#cityStr}
// ${this.#countryStr}`;

//     return res;
//   }
// }

// const user1 = new User('Vasya', 50, 'Dnipro', 'Ukraine');

// user1.age = 12;

// console.log(user1.info);

// user1.city = 'Lviv';

// console.log(user1.info);

//!======================================================

// class Product {
//   static #company = 'Apple';
//   static discount = 10;
//   static item = [];
//   static #counter = 0;

//   constructor(title, amount, price) {
//     this.title = title;
//     this.amount = amount;
//     this.price = price;
//     Product.#counter += 1;
//   }

//   showInfo() {
//     console.log('\n\n==================');
//     console.log('Title:', Product.#company, this.title);
//     console.log('Amount:', this.amount);
//     console.log('Price:', this.price - Product.discount);
//     console.log('==================');
//   }

//   static get counter() {
//     return Product.#counter;
//   }

//   static get company() {
//     return Product.#company;
//   }
//   static set company(x) {
//     if (x.length > 3) {
//       Product.#company = x;
//     }
//   }
// }

// const product1 = new Product('Iphone', 50, 25);

//!======================================================
// function foo(x) {
//   this.color = x;
//   return this;
// }

// const redColor = foo.call({}, 'red');
// const greenColor = foo.call({}, 'green');
// const blackColor = foo.call({}, 'black');

// const red = new foo('red');
// const black = new foo('black');
// const green = new foo('green');

// console.log(red);
// console.log(green);
// console.log(black);

//!======================================================
