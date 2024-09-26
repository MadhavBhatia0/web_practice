//The Promise object represents the eventual completion (or failure) of an asynchronous 
//operation and its resulting value.

//A Promise is an object representing the eventual completion or failure of an asynchronous operation

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // now it is connected to .then ()
    }, 1000)
})

promiseOne.then(function(){  // .then() connected to resolve
    console.log("Promise consumed");//not printed until we have written resolve // received from promiseOne
})
// resolve connected then
// reject connected to catch
// finally will be executed anyhow
// whenever the task is completed resolved will be called and then will be informed

//                  ***************************************************************************
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//                  ***************************************************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "hello", email: "hello@example.com"}) // passing parameters
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//                  ***************************************************************************

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "maddy", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username  // this is returned to next .then
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//                  ***************************************************************************

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  // data convert hone me bhi time lagta hai
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


// this is executed first see the console
fetch('https://api.github.com/users/madhavbhatia0')
.then((response) => { 
    return response.json()
})
.then((data) => {  // this then doesnot start until previous is completed
    console.log(data);
})
.catch((error) => console.log(error))

// interview ques
// A fetch() promise does not reject if the server responds with HTTP status codes that indicate 
//errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status 
//properties.