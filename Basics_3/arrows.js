const user = {
    username: "Atharva",
    price: 999 ,
    welcomeMessage: function() {
        console.log(`WELCOME TO THE WEBSITE,${this.username}`);
    }
};

user.welcomeMessage();