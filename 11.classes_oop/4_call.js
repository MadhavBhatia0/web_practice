function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)// function is called, it sets the the variable and then pop out of Stack and
    // that is why username is not set in createUser
    // (execution context is also poped out of call stack)


    SetUsername.call(this, username) //.call() holds the reference in apnawala(this) even after it is poped out of call stack
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);