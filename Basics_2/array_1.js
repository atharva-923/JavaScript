const marvel = ["Iron Man", "Spider Man", "Thor"];
const dbz = ["Goku", "Vegeta","Gohan"];

marvel.push(dbz);

console.log(marvel);//We get an array inside the array for eg:- ["abc", "def", ["ghi", "jkl"]]

console.log(marvel[3][1]);//output:- Vegeta

const combined = marvel.concat(dbz);//We get a single array with all the elements of both arrays
console.log(combined);

const other_method = [...marvel, ...dbz];// here the ... is called spread operator which spreads the elements of the array into a new array 
console.log(other_method);

const arr1 = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]];

const flat_arr = arr1.flat(Infinity);//The flat method is used to flatten the array upto the specified depth

console.log(flat_arr);

console.log(Array.isArray("Atharva"))// output:- false
console.log(Array.from("Atharva"))// output:- ['A', 't', 'h', 'a', 'r', 'v', 'a']
console.log(Array.from({name: "atharva"})) // output:- [undefined]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));