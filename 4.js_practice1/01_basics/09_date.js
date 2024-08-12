//JavaScript Date objects represent a single moment in time in a platform-independent format. 
//Date objects encapsulate an integral number that represents milliseconds since the midnight 
//at the beginning of January 1, 1970, UTC (the epoch)

// let myDate = new Date() 
// console.log(myDate)
// console.log(typeof myDate) //object
// console.log(myDate.toString());
// console.log(myDate.toDateString());//Fri Aug 02 2024
// console.log(myDate.toLocaleString());//02/08/2024, 10:18:32

// let myCreatedDate = new Date(2023, 0, 23)  //month start with 0 //23/01/2023, 00:00:00
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// 23/01/2023, 05:03:00
// let myCreatedDate = new Date("2023-01-14") // yyyy mm dd  //14/01/2023, 00:00:00
let myCreatedDate = new Date("01-14-2023")    //mm dd yyyy    14/01/2023, 00:00:00
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //gives time in millisecond //long value
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // /1000 to get in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {   // we can customize by passing object // default means eng-in or british or uk
    weekday: "long",
})