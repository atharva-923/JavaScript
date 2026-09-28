function add(num1, num2) {
    console.log(num1 + num2);
}

add();// Output: NaN

add(9, 9); // Output: 18

const result = add(9, 9); // Output: 18

console.log("result: " + result); // Output: result: undefined

function add_1(num1, num2) {
    let sum = num1 + num2; // this sum is a local variable, it is only accessible inside this function.
    return sum;
    // can also be written as: return num1 + num2;
    // after return statement, no code will be executed in the function.
}

const sum = add_1(9, 9); //this sum is a global variable, it is accessible outside the function.
console.log("sum: " + sum); // Output: sum: 18

function loginmessage(username) {
    if(username === undefined || username === null || username === "") {
        console.log("Please provide a username.");
        return;
    }
    return `${username} just logged in!`;
}

console.log(loginmessage("Atharva")); // Output: Atharva just logged in

console.log(loginmessage()); // Output: Please provide a username