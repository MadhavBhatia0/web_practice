//two methods to create objects
//1.constructor method singleton-one of its own kind // if object made from constructor
// Object.create // iske ander singelton banta hai

//2. literal
// object literals
const a={} //empty object



const mySym = Symbol("key1")
console.log(typeof mySym) //symbol
const JsUser = {
    name: "Maddy", // "name":"Madhav" // behind the scene it is processed as string
    "full name": "Madhav Bhatia", // can not access using dot method // must use [] method
    [mySym]: "mykey1", // if we dont use [],it will be treated as string, syntax- use [] with symbols
    age: 20,
    location: "Bathinda",
    email: "madddy.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[email]) //error
// console.log(JsUser["email"]) //because it is processed as string
// console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "madddy89087yy.com"
// Object.freeze(JsUser)       // can not anything now // donot give error but values also dont propogate
JsUser.email = "madmicrosoft.com" 
console.log(JsUser);

JsUser.greeting = function(){ //in js function could be treated as variables
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // use <this> to access object
}
// using backticks for string interpolation
console.log(JsUser.greeting); //[Function (anonymous)] function not excecuted instead reference to function is returned
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(typeof JsUser.greeting); //function
console.log(typeof JsUser.greeting()); //function itself is executed