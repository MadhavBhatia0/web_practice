var c = 100 
let a = 300
const b=200
if (true) {
    let a = 10       //local or block scope
    const b = 20     //local
    var c=30         //globaly change 
    console.log("INNER: ", a); //10 
}

// console.log(a);
// console.log(b);
// console.log(c);  //30

//                          ************************************
function one(){
    const username = "madhav"

    function two(){
        const website = "youtube"
        console.log(username); //youtube
    }
    // console.log(website); //error
     two()
}
// one()

//                          ************************************

if (true) {
    const username = "mad"
    if (username === "mad") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username); //error


// ++++++++++++++++++ interesting ++++++++++++++++++

// difference between two types of function declarations
console.log(addone(5)) //works
function addone(num){
    return num + 1
}
console.log(addone(5)) //works


//addTwo(5) //calling before defination of function(expression type) gives error
const addTwo = function(num){  //function but also an expression,we are storing it in a variable,if we call it before it will give error
    return num + 2
}
addTwo(5)