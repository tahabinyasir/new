// <, >, <=, >=, ==, !=, ===, !== All types
// if
// const isUserLoggedIn = true
// const temrature = 80

// if ( temrature < 50 ) {
//     console.log("less than 50%");
// } else {
//     console.log("Temrature is Greater than 50%");
// }


// const score = 200

// if (score > 100) {
//     let power = "Fly"
//     console.log(`User power: ${power}` );
// }      // Block Scope


// const balance = 1000

// if (balance > 500) console.log("Greater than 500"), console.log("Taha");
// code un-readability

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 700) {
//     console.log("less than 700");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else if (balance < 1200) {
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loogedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard) {
    console.log("You can buy courses now!");
}

if (loogedInfromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}
