// +

console.log('string ' + '- string');

console.log(2 + 2);

console.log(2 + '2');

console.log(2 + + '2');

let incr = 10;
let decr = 10;

// incr++;
// decr--;
console.log(`incr = ${incr}`);
console.log(`decr = ${decr}`);

console.log(`incr = ${incr++}`);
console.log(`decr = ${decr--}`);

let increm = 10;
let decrem = 10;

// ++increm;
// --decrem;
console.log(`incr = ${increm}`);
console.log(`decr = ${decrem}`);

console.log(`incr = ${++increm}`);
console.log(`decr = ${--decrem}`);

// < >

console.log( 5 < 2 );
console.log( 5 > 2 );

console.log(5 % 2);
console.log(9 % 3);


let x = 10;
let y = 5;
//+= 
x += y; // x = x + y;
console.log(x);

//*= 
x *= y; // x = x * y;
console.log(x);

// -=
x -= y; // x = x - y;
console.log(x);

// /=
x /= y; // x = x / y;
console.log(x);

// %=
x %= y; // x = x % y;
console.log(x);

// = присвоювання
// == порівняння
// === строге порівняння

console.log(2*4 = 8);
console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');


// && - логічне "і"
// || - логічне "або" 

let isChecked = false;
let isClosed = false;

console.log(isChecked && isClosed); // false && false => false; true && false => false; true && true => true;
console.log(isChecked || isClosed); // false || false => false; true || false => true; true || true => true;

// ! - заперечення
// console.log(isChecked || !isClosed);


// Я хочу купити картоплю фрі та гамбургер, якщо обидві страви є у наявності, то я їх купую і буду ситий.

let hamburger = true;
let fries = true;

if (hamburger && fries){
    console.log('Я ситий');
} 

console.log(hamburger && fries)


let hamburger1 = 0; // 0, null, undefined, '', NaN => false
let fries1 = 5;

if (hamburger1 && fries1){
    console.log('Я ситий');
} else {
    console.log('Я голодний');
}

// Я хочу купити 2 картоплі фрі та 3 гамбургери або 3 порції нагетсів і колу, якщо щось з цього буде в наявності, то я їх купую і буду ситий.

let hamburger = 3;
let fries = 3;
let nuggets = 3;
let cola = 2;

//1. >=
//2. &&
//3. ||

if(fries >= 2 && hamburger >= 3 || nuggets >= 3 && cola){
    console.log('Я ситий');
} else {
    console.log('Я голодний');
}


