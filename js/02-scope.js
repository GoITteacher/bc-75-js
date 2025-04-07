/*
 * Блокова область видимості змінних
 */
// debugger;
// const c = 15;

function foo() {
  const a = 25;
  const b = 18;

  if (true) {
    const a = 5;
    console.log(a);
    console.log(b);
    console.log(c);
  }

  if (true) {
    const b = 10;
    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

// foo();
