let num = 50;

while( num < 60 ){
    console.log(num);
    num++;
}
//перший раз виконує умову, а в кінці виконує код. тому не знайшов 70


let num1 = 70;

do{
    console.log(num1);
    num1++;
}while(num1 < 60)
//перший раз виконує дії, а в кінці виконує перевірку. тому знайшов 70



for(let i = 1; i < 8; i++){
    console.log(i);
}

let num3 = 70;
for(let i = 1; i < 8; i++){
    console.log(num3);
    num3++;
}
// збільшує num3 на 1 того шо ++

let num2 = 70;
for(let i = 1; i < 8; i++){
    console.log(i);
    console.log(num2);
    num2++;
}
//i =   // 0  1  2  3   4
let arr = [3, 5, 6, 7, 11];
        // 1  2  3  4   5 - довжина масиву
for(let i = 0; i < arr.length; i ++){ // let i = 0; i < 5; i ++
    console.log(arr[i]);
}


let arr1 = [3, 5, 6, 7, 11];
let i = 0;

for(i; i < arr1.length; i ++){
    console.log(arr1[i]);
}

let arrrr = [3, 5, 6, 7, 11];

for(let i = 0; i < arrrr.length; i++){
    if(i === 3){
        continue;
    }
    console.log(`i = ${i}`);
    console.log(`arrrr element = ${arrrr[i]}`);
}

let arrrray = [3, 5, 6, 7, 11];

for(let i = 0; i < arrrray.length; i++){
    if(i === 3){
        break;
    }
    console.log(`i = ${i}`);
    console.log(`arrrray element = ${arrrray[i]}`);
}


