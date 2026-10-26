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