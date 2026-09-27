function add(num1, num2) {
    console.log(num1 + num2);
}

add();// Output: NaN

add(9, 9); // Output: 18

const result = add(9, 9);

console.log(result); // Output: undefined