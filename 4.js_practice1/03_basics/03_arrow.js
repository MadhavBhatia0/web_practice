const user = {
    username: "maddy",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //refers to current context
        console.log(this); //whole object will be printed
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //empty object( we are in node environment)
// console.log(this); // in browser (Window) global object is window

//                              *****************************************
// 1st
// function chai(){
//     console.log(this); //many values
//     let username = "maddy"
//     console.log(this.username);//undefined, cant use this, different from the functionality of this in objects
// }
// chai()

//2nd
// const chai = function () {
//     console.log(this); //many values ,same as 1st
//     let username = "maddy"
//     console.log(this.username);
// }
// chai()

// 3rd
const chai =  () => {
    console.log(this); //different ,EMPTY OBJECT 
    let username = "maddy"
    console.log(this.username); //undefined
}
// chai()

//                              *****************************************
// basic arraow function ()=>{}

// const addTwo = (num1, num2) => { //storing arrow function in a variable
//     return num1 + num2           //EXPLICIT return
// }

//if used {} then we have to use return, if we use () then no need of return
const addTwo = (num1, num2) =>  num1 + num2 //IMPLICIT return 
// const addTwo = (num1, num2) => ( num1 + num2 )
// const addTwo = (num1, num2) => ({username: "madg"}) //object must be in parenthesis for return


console.log(addTwo(3, 4))

//                              *****************************************
