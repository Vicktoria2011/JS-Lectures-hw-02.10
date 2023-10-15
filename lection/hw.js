
/*
Домашка:
*/

/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let gamburgers = 4;
let friesPotatos = 1;
if(gamburgers > 3 && friesPotatos >= 1){
    console.log('Ми поїли')
}
else if(gamburgers < 4 || friesPotatos < 1){
    console.log('Ми йдемо в інше кафе')
}

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price = 1000;

if(price >= 1000 && price <= 1900){
    console.log('значення ціни товару між 1000 та 1900 включно')
} 

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

//1
let priceRandom = 19000;
let priceMin = 1000;
let priceMax = 1900;

if(!((priceRandom <= 1000) && (priceRandom >= 1900))){
    console.log('значення ціни товару не знаходиться між 1000 та 1900 включно')
} 

//2
let priceRandom1 = 1900;
let priceMin1 = 1000;
let priceMax1 = 1900;

if((priceRandom1 <= 1000) || (priceRandom1 >= 1900)){
    console.log('значення ціни товару не знаходиться між 1000 та 1900 включно')
}

//3
let price1 = 1950;

if((price1 <= 1000) || (price1 >= 1900)){
    console.log('значення ціни товару не в діапазоні між 1000 та 1900 включно')
}

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 2;
let winter = 0;
let spring = 1;
let summer = 2;
let autumn = 3;

if(season === 0){
    console.log("Сейчас зима")
}else if(season === 1){
    console.log("Сейчас весна")
}else if(season === 2){
    console.log("Сейчас лето")
}else if(season === 3){
    console.log("Сейчас осень")
}else {
    console.log('Value does not exist')
}

або

const seasonNum = 4;
let season1;

if(seasonNum === 1){
    season1 = "Зима"
} else if(seasonNum === 2){
    season1 = "Весна"
} else if(seasonNum === 3){
    season1 = "Літо"
} else if(seasonNum === 4){
    season1 = "Осінь"
} else {
    season1 = 'Value does not exist'
}

console.log("Зараз: " + season1);

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

const a = 5;
const b = 9;
const c = 3;

if(a > b && b > c){
    console.log("Середне число по значенню b");
} else if(b > a && a > c){
    console.log("Середне число по значенню a");
} else if(a > c && c > b){
    console.log("Середне число по значенню c");
}

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Воскресенье");
        break;
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

const a1 = 2;
const b1 = 1;
const c1 = '/';
let result;

switch(c1){
  case "+":
    result = a1 + b1;
  break;
  case "-":
    result = a1 - b1;
  break;
  case "*":
    result = a1 * b1;
  break;
  case "/":
    result = a1 / b1;
  break;
}
console.log(result);

/*
8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.
*/

let myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray); 

/*
9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
*/

let myArray1 = [];

for (let i = 1; i <= 9; i++) {
    if (i % 2 === 0) {
    myArray1.push(i);
    }
}

console.log(myArray1); 


let myArray2 = [];

for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
    myArray2.push(i);
    }
}

console.log(myArray2); 

/*   
10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];
*/

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

/*    
11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
*/

const arr1 = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr1.length; i++) {
  for (let i1 = 0; i1 < arr1[i].length; i1++) {
    console.log(arr1[i][i1]);
  }
}

/*    
12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product);
*/

const arr3 = [[1], [2], [3]]  // >  console.log(product) має повернути 6

let product = 1;

for (let i = 0; i < arr3.length; i++) {
    for (let i1 = 0; i1 < arr3[i].length; i1++) {
        product *= arr3[i][i1];
    }
  }

console.log(product);


const arr4 = [[1, 2], [3, 4], [5, 6, 7]]  // >  console.log(product) має повернути 5040

let product2 = 1;

for (let i = 0; i < arr4.length; i++) {
    for (let i1 = 0; i1 < arr4[i].length; i1++) {
        product2 *= arr4[i][i1];
    }
  }

console.log(product2);  
  

const arr5 = [[5, 1], [0.2, 4, 0.5], [3, 9]]  // >  console.log(product) має повернути 54

let product3 = 1;

for (let i = 0; i < arr5.length; i++) {
    for (let i1 = 0; i1 < arr5[i].length; i1++) {
        product3 *= arr5[i][i1];
    }
  }

console.log(product3);


/*    
13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

var text="ГідроелектростанціЯ";
var s=text.replace(/[а, е, є, и, і, о, у, ю, я]/gi,'');

console.log(s);

/*
14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let m = 32;
let km = m/1000;

if(km === 1){
    console.log(m + " метрів" + " = " + m/1000 + " кiлометр ");
}else if(km === 2, 3, 4){
    console.log(m + " метри" + " = " + m/1000 + " кiлометра ");
}else if(km === 0, 5 < m < 20){
    console.log(m + " метрів" + " = " + m/1000 + " кiлометрів ");
} else if(km === 0,5){
    console.log(m + " метра" + " = " + m/1000 + " кiлометра ");
}; 

або

let m1 = 32
let km1 = m1 / 1000;

if (km1 === 1) {
  console.log(m1 + " метрів" + " = " + km1 + " кілометр");
} else if (km1 >= 2 && km1 <= 4) {
  console.log(m1 + " метри" + " = " + km1 + " кілометри");
} else if (km1 === 0.5) {
  console.log(m1 + " метра" + " = " + km1 + " кілометра");
} else {
  console.log(m1 + " метрів" + " = " + km1 + " кілометрів");
}