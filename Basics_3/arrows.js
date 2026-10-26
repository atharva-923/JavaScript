const user = {
    username: "Atharva",
    price: 999 ,
    welcomeMessage: function() {
        console.log(`WELCOME TO THE WEBSITE,${this.username}`);
    }
};

user.welcomeMessage();

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(5, 10));