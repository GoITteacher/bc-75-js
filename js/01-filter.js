/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

//!======================================================

// const numbers = [5, 10, 15, 20, 25];

// const arr = numbers.filter(elem => {
//   return elem % 2 === 0;
// });

// const arr1 = numbers.filter(elem => elem > 15);
// const arr2 = numbers.filter((elem, idx) => elem > idx);
// const arr3 = numbers.filter(elem => elem % 2 === 0);

// console.log(arr1);

//!======================================================
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const arr1 = allCars.filter(car => {
//   return car.amount >= 10;
// });

// const arr2 = allCars.filter(car => car.amount <= 10);
// const arr3 = allCars.filter(car => car.onSale);
// const arr4 = allCars.filter(car => car.model.includes('V'));

// const arr5 = allCars.filter(car => {
//   const isValidType = car.type === 'suv';
//   const isValidPrice = car.price > 10000;
//   const onSale = car.onSale;
//   return isValidPrice && isValidType && onSale;
// });

// console.table(arr5);

//!======================================================

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

// const filterByPrice = (cars, threshold) => {
//   const res = cars.filter(car => car.price < threshold);
//   return res;
// };

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

// const getCarsWithDiscount = cars => {
//   const filteredArr = cars.filter(el => el.onSale === true);
//   return filteredArr;
// };

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => {
//   const filteredArr = cars.filter(car => car.type === type);
//   return filteredArr;
// };

// const getCarsWithType1 = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));

//!======================================================

/**
 * Нехай функція task1 повертає масив автомобілів тип яких збігається
 * зі значенням параметра type і ціна яких менша ніж
 * значення параметра threshold.
 */

/* 
 {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  }
*/

// function task1(cars, type, threshold) {
//   const res = cars.some(car => {
//     const isValidType = car.type === type;
//     const isValidPrice = car.price < threshold;
//     return isValidPrice && isValidType;
//   });

//   if (res) {
//     console.log('Ми маємо для вас чудову пропозицію');
//   } else {
//     console.log('Sorry');
//   }
// }

// function task2(cars, type, threshold) {
//   const validTypeCars = cars.filter(car => car.type === type);
//   const validPriceCars = validTypeCars.filter(car => car.price < threshold);
//   const onSaleCars = validPriceCars.filter(car => car.onSale);
//   return onSaleCars;
// }

//!======================================================

/* 
filter
find
findIndex
every
some
*/

// const numbers = [1, 4, 6, 1, 34, 56, 6, 4, 5, 2, 3, 4, 5, 65, 2, 34, 5];
// const res = numbers.some(elem => elem % 2 === 0);
// console.log(res);
