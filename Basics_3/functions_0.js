function add(num1, num2) {
    console.log(num1 + num2);
}

add();// Output: NaN

add(9, 9); // Output: 18

const result = add(9, 9); // Output: 18

console.log("result: " + result); // Output: result: undefined

function add_1(num1, num2) {
    let sum = num1 + num2;
    return sum;
    // can also be written as: return num1 + num2;
    // after return statement, no code will be executed in the function.
}

const sum = add_1(9, 9);
console.log("sum: " + sum); // Output: sum: 18