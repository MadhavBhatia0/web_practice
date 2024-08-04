let score = "33"

//console.log(typeof score);
//console.log(typeof(score));

// score = Number(score)
// console.log(typeof score); //  possible

//when converting to Number
// "33" => 33
// "33abc" => NaN
//  "string"=>NaN
//  true => 1; false => 0
//  null=> 0
// undefined=>NaN

//when converting to boolean
// let isLoggedIn
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   //false

//""=> false, "string"=>true
//1=>true,0 false

//when converting to string
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);  //33
// console.log(typeof stringNumber); //string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2*2); //4
// console.log(2**3);//8

let str1 = "hello"
let str2 = " maddy"

let str3 = str1 + str2
// console.log(str3); // hello maddy

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

// console.log(true) //true
// console.log(+true)//1    converted to number when we use +
// console.log(true+)  //error

// console.log("")//nothing (empty string)
// console.log(+"")//0         converted to number when we use +

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2// (possible) don't do this
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);