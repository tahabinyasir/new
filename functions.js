function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMassage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Taha"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Taha",
    price: 122,
    products: "Socks, Mozzaa[Socks], Aaloo[Potato], Anndaa[Eggs], Tamatar[Tomato]"
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price} 
Also products are ${anyobject.products}`); 
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: [399, 480, 600],
// })

const myNewArray = [200, 400, 100, 600]

function returnScondValue(getarray){
    return getarray[1]
}

// console.log(returnScondValue(myNewArray));
console.log(returnScondValue([200, 300, 600, 100]));