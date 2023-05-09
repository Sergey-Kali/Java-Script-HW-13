// 1. Реалізувати метод .pow(n) для масиву при виклику, якого всі елементи масиву мають бути піднесенні до степеню n. Приклад:

// [1,2,3].pow(2) => [1,4,9]

const arr = [5, 6, 9, 7, 8, 5, 1, 3, 6, 4];

Array.prototype.pow = function (exponent) {
  const result = this.map((el) => Math.pow(el, exponent));
  return result;
};

console.log(arr.pow(3));

// 1. Реалізувати метод .pow(n) для масиву при виклику, якого всі елементи масиву мають бути піднесенні до степеню n. Приклад:

// [1,2,3].pow(2) => [1,4,9]

// 2. Додати до функції метод defer(n), який має виконати тіло функції через n мілісекунд. Приклад:

// function a() { alert(“test” );}
// a.defer(1000); // виведе “test” через 1 секунду

function a() {
  alert("test");
}

Function.prototype.defer = function (n) {
  setTimeout(this, n);
};

a.defer(1000);
