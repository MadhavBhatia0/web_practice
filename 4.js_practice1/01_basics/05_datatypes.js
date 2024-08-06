//javascript - dynamically typed-can change their datatype during runtime
//c++ -statically typed

//based on how they are assessed 2 types primitive and non primitive

//  Primitive:call by value
//  7 types : String, Number, Boolearn, null-nothing, undefined- not decided value, Symbol-for uniqueness, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId);
console.log(id === anotherId); //false. symbol represents uniqueness.

const bigNumber = 3456543576654356754n // use n to represent bigint
console.log(typeof bigNumber)

//  non primitive: call by ref
//  array, object,function

const heros = ["shaktiman", "naagraj", "doga"]; //array

//object
let myObj = {
    name: "maddy",
    age: 20,
}

// function
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myObj)//object
console.log(typeof myFunction)//function but we call it object function
console.log(typeof heros) // object. array is also an object