let a = 300
let b = 20

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }


// console.log(a);
// console.log(b);


function one(){
    const username = "Taha"
    
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()


}

// one()

if (true) {
    const username = "Taha"
    if (username === "Taha") {
        const website = "  +  Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

addone(5)

function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 1
}

addtwo(5)

// function aap ko do tariko se define hota we dikhen ge
// aik variable me, or aik normal tarika se 