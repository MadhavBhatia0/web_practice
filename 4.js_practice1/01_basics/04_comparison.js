// console.log("2" > 1); //true
// console.log("02" > 1); //true  auto convert string to number

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//== and >=,<=,<,> work differently. >=,<= first convert null to 0 and then compare

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// === 
console.log("2" == 2);  // doesnot match datatype //true
console.log("2" === 2); // also match datatype //false