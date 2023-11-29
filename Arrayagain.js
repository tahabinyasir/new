const marvel_heores = ["Thor", "Deadlord", "Ironman"]
const DC_heores = ["Superman", "Flash", "Batman"]

// marvel_heores.push(DC_heores)

// console.log(marvel_heores);
// console.log(marvel_heores[3][1]);

// const allHeros = marvel_heores.concat(DC_heores)
// console.log(allHeros);

const all_new_heores = [...marvel_heores, ...DC_heores]

// console.log(all_new_heores);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Taha"));
console.log(Array.from("Taha"));
console.log(Array.from({name: "Taha"})); // Interesting.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));