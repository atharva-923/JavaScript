//var c = 300
let a = 300 // global scope
if (true) {
    let a = 10 // block scope
    const b = 20
    // var c = 300
    console.log("INNER: ", a);
    
}
// console.log(c); //var c gets out of the block scope and is accessible here

function one(){
    const username = "Atharva"

    function two(){ // for fucntion two the global is function one.
        const website = "Crate"
        console.log(username);
    }
        console.log(website);

     two() //execute the function two() to access the variable website

}

one() //execute the function one() to access the variable username

if (true) {
    const username = "Atharva"
    if (username === "Atharva") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}