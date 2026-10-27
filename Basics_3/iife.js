(function one () { // named IIFE
    console.log('DB connected!');
})(); 

// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.

//one();

( (name) => {
    console.log('DB TWO connected!');
})('Atharva');