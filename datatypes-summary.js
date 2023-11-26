//  Primitive

// 7 Types : String, Number, Boolean, Null, Undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

// const bigNumber = 546546256646566345346n



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "Taha",
    age: 14,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-primitive)

// Stack ke andar hamain copy milta hai. // aur Heap ke andar hamain reference milta hai aur ham jo bhi changes karte hain wo hum original value ke andar hi karte hain
