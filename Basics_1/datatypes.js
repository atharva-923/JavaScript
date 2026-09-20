"use strict"; // treat all js code as newer js.

 alert(9+9) //but we are using nodejs , not any browser or have binded it with html.

// null ---> standalone value. 

// undefined ---> value is not given or defined yet.

let name = null;

console.log(name);

// Symbol ---> used for finding uniqueness.

console.log(typeof name);

const id = Symbol("999");
const id2 = Symbol("999");

console.log(id === id2); // false,Why? because both are unique and different, How but both have same description? because description is just a label for the symbol, it doesn't affect the uniqueness of the symbol itself.

const heros = ["spiderman", "ironman", "thor", "hulk"];// array 

let myObj = {
    name: "Atharva",
    age: 19,
};// object

const myFunc = function() {
    console.log("Hello World");
}// function

/*************************************Detailed*************************************/
// Js is a dynamically typed language. It means we don't have to specify the data type of a variable when we declare it. The data type will be determined automatically during the execution of the program based on the value assigned to the variable.
/* 
    Primitive
    7-types of primitive data types in js.
    1. Number
    2. String
    3. Boolean
    4. Null(empty value)
    5. Undefined
    6. Symbol
    7. BigInt

    Reference (Non-Primitive)
    1. Object
    2. Array
    3. Function
*/