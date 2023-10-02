if (4 == 5){
    console.log('Expression is true');
} else {
    console.log('Expression is false');
}

if (false){
    console.log('Expression is true');
} else {
    console.log('Expression is false');
}

if (true)
    console.log('Expression is true');


let num = 10001;

if(num<49){
    console.log('< 49');
} else if (num > 1000){
    console.log('> 1000');
} else {
    console.log('ok');
}

let num1 = 100;
(num1 === 100) ? console.log('ok') : console.log('not ok');


let number = 111;
switch(number){
    case 49:
        console.log('number = 49');
        break;
    case 50:
        console.log('number = 50');
        break;
    case 500:
        console.log('number = 500');
        break;
    default:
        console.log('Default output')
        break;
}