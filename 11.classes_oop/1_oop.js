const user = {
    username: "maddy",
    loginCount: 8,
    signedIn: true,     // properties

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); //current context
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // empty object here in node enviironment
// if we do this is browser it is not empty

//const pro= new Promise() // new is constructor function
// new gives new context


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // by default return hota hi hai. does not matter if we have written this or not
}

// const userOne = User("mad", 12, true)
// const userTwo = User("Code", 11, false) // will overwrite values
//console.log(userTwo);
//console.log(userOne);

//using new keyword gives new context
// give new instanse
const userOne = new User("mad", 12, true)
const userTwo = new User("Code", 11, false)
console.log(userOne.constructor); // reference to itself //[Function: User]
//console.log(userTwo);