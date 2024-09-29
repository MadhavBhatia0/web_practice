function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2
//behaving like an object
console.log(multipleBy5(5));//25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype);//{} by default ik context set hota hai. toh yeh'{}' us method ka this hai
// yeh empty hai kyonki hamne koi reference nhi liya abhi 

//****************************** 
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++  // this=jis ne bhi
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)  // doesnot work if we dont write new

chai.printMe() // we don't need to use chai.prototype.printMe. js handels it even if we use our own created
//functions inside prototype just like we don't use arr.prototype.map()


// after writing new an emotyobject is created and linked to prototype and then inject the function() increment,printMe
// based on the function createUser()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/