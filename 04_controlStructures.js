// if-else

const num1 = 24;

if(num1 > 0) {
    console.log('POSITIVE NUMBER');
} else if(num1 < 0 ) {
    console.log('NEGATIVE NUMBER');
} else {
    console.log(0);
}

const age = 21;

if(age >= 18) {
    console.log("your eligible to vote");
} else {
    console.log('not eligible to vote');
}

// nested if-else 

const numm1 = 20;
const num2 = 230;
const num3 = 40;

if(numm1 > num2 && numm1 > num3) {
    console.log('numm1 is greater');
} else if(num2 > numm1 && num2 > num3 ) {
    console.log('num2 is greater');
} else {
    console.log('num3 is greater');
}

// switch case

const day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('invalid');
        break;
}

// example 2

let marks = 55;

switch (true) {
    case marks >= 90:
            console.log('A');
        break;
    case marks >= 75:
            console.log('B');
        break;
    case marks >= 65:
            console.log('C');
        break;
    case marks >= 55:
            console.log('D');
        break;
    case marks >= 35:
            console.log('F');
        break;
        
    default:
        console.log('better luck next time');
        break;
}


// ternary operator

let numb = 9;

let result = numb % 2 == 0 ? 'even number' : 'odd number'
console.log(result);


// leap year

let year = '2008';

if(year % 400 === 0) {
    console.log('leap year');
}
else if(year % 100 === 0){
    console.log('not a leap year');
}
else if(year % 4 === 0) {
    console.log('leap year');
}
else {
    console.log('not a leap year');
}

// ternary operator positive/negative number

let numA = -3;

result1 = numA > 0 ? 'positive number' : 'negative number';
console.log(result1);

