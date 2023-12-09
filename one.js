// if
// <, >, <=, >=, ==, !=, ===, !==


// const isUserLoggedIn = true
// const temperature = 49


// if ( temperature < 50 ) {
//     console.log("Less than 50%");
// } else {
// console.log("Temperature is greater than 50%");
// }


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power ${power}`);
// }


const balance = 1000

// if (balance > 500) console.log("Taha"), console.log("Taha2");
// Imature code

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//    console.log("Less than 900"); 
// } else if (balance < 1200) {
//    console.log("Less than 1200"); 
// }


const userLoggedIN = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIN && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}