const user = {
    username: "Taha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Taha"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "Taha"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Taha"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }

    // const addTwo = (num1, num2) =>  num1 + num2

    // const addTwo = (num1, num2) =>  ( num1 + num2 )

    const addTwo = (num1, num2) =>  ({username: "Taha"})
    
    console.log(addTwo(3, 1))

    // const myArray = [2, 5, 3, 7, 8]

    // myArray()