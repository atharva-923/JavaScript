// const tinderUser = new Object() || Output :- {} || singleton object
const instaUser = {} // Output :- {} || non singleton object

instaUser.id = "597591"
instaUser.name = "Retard"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kajal",
            lastname: "Rai"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } object inside an object
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [                 // Array Objects
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
]

users[1].email
 console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser)); // Keys then Values

console.log(instaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Atharva patil",
    price: "999",
    courseInstructor: "Atharva"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Atharva",
//     "coursename": "Atharva Patil",
//     "price": "free"
// }

[
    {},
    {},
    {}
]