// const facebookUser = new Object()
const facebookUser = {}

facebookUser.id = "123abc"
facebookUser.name = "Deadlord"
facebookUser.isLooggedIn = false
facebookUser.email = "taha@gmail.com"
facebookUser.fullname = "Taha Bin Yasir"

// console.log(facebookUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
                firstname: "Taha",
                lastname: "Yasir"
        }
    } 
}

// console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj2, obj1 }

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail"
    },
    {
        id: 1,
        email: "h@gmail"
    },
]

users[1].email
// console.log(facebookUser);

// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));

// console.log(Object.hasOwnProperty(isLooggedIn));

// =+=+=+=+=+=+=+=+=+=+= Objects Desturucturing +=+=+=+=+=+=+=+=+=+


const course = {
    coursename: "JS in Urdu",
    price: "999",
    courseInstructor: "Taha Bin Yasir"
}

// course.courseInstructor

const {courseInstructor: Taha} = course

console.log(Taha);