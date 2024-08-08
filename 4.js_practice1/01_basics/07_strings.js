// let str="string"+'string'
// console.log(str)  //can use both "" ''

const name = "maddy"
console.log(name) //maddy
console.log(typeof name) //string

// String is an object in javascript. data stored in key value-pairs, key is index pair is char
const name2=new String('hello')
console.log(name2) // [String: 'hello']
console.log(typeof name2) //object

const repoCount = 50
//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//using placeholder and variable iject


//                                              ********** 
const gameName = new String('maddyy-12345')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());//does not change the original string
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)//0-3 //does not include last value //IGNORE -VALUES,START WITH 0
// console.log(newString);

// const anotherString = gameName.slice(-2, 10) //slice can also take -values (str.length+provided value) ////does not include last value
// console.log(anotherString);

const newStringOne = "   maddy    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove extra spaces // used in email


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar')) //return boolean
console.log(gameName.split('-'));