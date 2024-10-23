// console.log(Math.PI);
// Math.PI = 5 //3.14
// console.log(Math.PI);// 3.14 // not overwritable

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // to know about a property // math k under pi ki property
// console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false, // iterable
//     configurable: false
// }

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}