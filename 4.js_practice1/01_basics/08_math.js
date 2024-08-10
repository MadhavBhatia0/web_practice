const score = 400 //auto define number
console.log(score); //400

const balance = new Number(100)// explicitely defined number gives additional properties
console.log(balance); //[Number: 100]

// console.log(balance.toString().length);
console.log(balance.toFixed(2));// parameter for precision value

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //includes ONLY 4 DIGITS //return string

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //FOR COMMAS

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// maths library comes by default in js

// console.log(Math); // object with many properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //0-1 included //values can be 0.1,0.02
console.log((Math.random()*10) + 1); //1-10// +1 to avoid 0.02*10 case
console.log(Math.floor(Math.random()*10) + 1); //1-10 integer

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)