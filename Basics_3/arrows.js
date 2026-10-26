const user = {
    username: "Atharva",
    price: 999 ,
    welcomeMessage: function() {
        console.log(`WELCOME TO THE WEBSITE,${this.username}`);
    }
};

user.welcomeMessage();

const addTwo = (num1, num2) => { // return keyword and curly braces are used
    return num1 + num2;
};

console.log(addTwo(5, 10));

const addTwomethod = (num1, num2) => num1 + num2; // no return keyword and no curly braces
console.log(addTwomethod(5, 10));

/* What is arrow function?
An arrow function is a compact syntax for writing function expressions in JavaScript. Introduced in ES6 (ES2015), it uses the => symbol (often called a "fat arrow") to make code cleaner, more readable, and highly optimized for short callback functions.*/