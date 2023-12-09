// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// true, "0", 'false', " ", [], {}, function(){}


const userEmail = "gth"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email"); 
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// let val1;
// val1 = 5 ?? 10
// console.log(val1);


// Terniary Operator


// condition ? true : false


const iceTeaPrice = 200
iceTeaPrice <= 180 ? console.log("Less than 180") : console.log("Greater than 180");