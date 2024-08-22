//function defination
function sayMyName(){
    console.log("m");
    console.log("a");
    console.log("d");
    console.log("h");
    console.log("a");
    console.log("v");
}
// sayMyName  //reference
// sayMyName()// execution
console.log(typeof sayMyName) //function
console.log(typeof sayMyName()) //it will be called and undefined will be printed

//                          ************************************

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ //parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5) //arguments
//if
// console.log("Result: ", result);
//if not passed any value then it take it as undefined
// to give default values-function add(a=3.b=6)

//                          ************************************
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("maddy"))
// console.log(loginUserMessage()) // gives undefined if we dont use if

//                          ************************************

function calculateCartPrice(val1, val2, ...num1){ //REST operator for many values
    return num1                                   // returns ARRAY of last two values val1=200,val2=400
}

function calculateCartPrice(...num1){
    return num1                                   // returns ARRAY
}

console.log(calculateCartPrice(200, 400, 500, 2000))

//                          ************************************

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({   // direct object passing
    username: "sam",
    price: 399
})

//                          ************************************

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //direct array passing