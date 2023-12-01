// Singleton
// Object.create

// Object literals

const mySYM = Symbol("Key1")


const JsUser = {
    name: "Taha",
    "full name": "Taha Bin Yasir",
    [mySYM]: "MyKey2",
    age: 18,
    location: "Jaipur",
    email: "taha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySYM])

JsUser.email = "taha@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "taha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());