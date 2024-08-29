// Immediately Invoked Function Expressions (IIFE)
//syntax ()();
//used to remove pollution from global scope
// must use ; when writing two IFFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //neccessary to put ; because it doesnot know when the scope ends

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('madhav') // giving parameter in calling ()