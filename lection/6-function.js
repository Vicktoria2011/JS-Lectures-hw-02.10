let a = 3;
let b = 5;
let c;

c = a + b;
console.log(c);

///  .... code

let a1 = 3;
let b1 = 5;
let c1;

c1 = a1 + b1;
console.log(c);


function sum(a, b){
    let c = a + b;
    console.log(c)
}

sum(4,6);

sum(2,5);


let a2 = 3;
let b2 = 5;

sum(a2,b2);


/// ??
function sum2(a, b){
    let c = a + b;
   return c;    /// після return код не виконується 
}

sum2(4, 6);

sum2(2, 5);

let a3 = 3;
let b3 = 5;

sum(a3, b3);

sum(sum2(a2,b2), b3);


function myFn1(a, b){
    let c = a + b;
    console.log(c);
}

function myFn2(a, b){
    let c = a + b;
    return c;
}

myFn1(3, 4);

myFn2(4, 4);

console.log(myFn2(4, 4));