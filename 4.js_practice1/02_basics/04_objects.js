// with the help of constructor
// const tinderUser = new Object() //empty singelton objet
const tinderUser = {} //empty non singelton objet
// console.log(tinderUser) // same output in both cases

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//                              ******************************************
const regularUser = {
    email: "some@gmail.com",
    fullname: { //nesting of objects //full name and userfullname are objects
        userfullname: {
            firstname: "madhav",
            lastname: "bhatia"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
//there is also a concept of optional chaining// used when one object doesnot exist// otherwise we will have to use too many if-else

//                              ******************************************

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //obj will contain obj1,obj2 //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj5 = Object.assign(obj1, obj2)
// console.log(obj1);
// console.log(obj5); //obj1 and obj5 same

const obj3 = Object.assign({}, obj1, obj2, obj4) //target and sources

// const obj3 = {...obj1, ...obj2} //spread operator
console.log(obj3);

//                              ******************************************

const users = [ //array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns ARRAY OF KEYS //IMP
// console.log(Object.values(tinderUser));//returns ARRAY OF VALUES
// console.log(Object.entries(tinderUser)); //returns array of array of key value pairs
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //TRUE

//                              ******************************************
// destructuring
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "MAD"
}

// course.courseInstructor //big name 

const {courseInstructor}=course
const {courseInstructor: instructor} = course //giving another name(instructor) //known as destructuring

// console.log(courseInstructor);
console.log(instructor);


//almost a json, key is a string,nameless object
// {    
//     "name": "madd",
//     "coursename": "js",
//     "price": "free"
// }

//sometimes apis are also in form of array
[
    {},
    {},
    {}
]