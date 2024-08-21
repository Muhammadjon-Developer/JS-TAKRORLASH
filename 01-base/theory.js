//* Operators

let a = 5;
let b = 2;
let c = 10;

c = c + a; //& optimization = c+= a = 15
c = c - a; //& optimization c -= a = 10
c = c * a; //& optimization c *= a = 50
c = c / a; //& optimization c /= a = 10

c = 4 ** 2; // 16 = 4 * 4

console.log(c);

//* Data Types

const age = 14; //number
const job = "Programmer"; //string
const isProgrammer = true; //boolean
let x; // undefined because this variable hasn't a value

console.log(typeof age);
console.log(typeof job);
console.log(typeof isProgrammer);
console.log(typeof x);

// null
console.log(null);

// NaN
console.log(typeof (10 / x));
console.log(typeof NaN); //& type of NaN is number it is truth and not an error

// Priority
const fullAge = 14;
const birthYear = 2010;
const currentYear = 2024;
// > < >= <=
const isfullAge = currentYear - birthYear >= fullAge;

// console.log(isfullAge);

const num1 = 27; // number
const num2 = "27"; // string

// console.log(typeof num1);
// console.log(typeof num2);

// console.log(num1 == num2); //& == - we only compare the value of variables
console.log(num1 === num2); //& === - we compare the value and the type of variable
