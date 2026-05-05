let age = "19" ;

console.log(typeof (age));// Here the type of age is string because it is in double quotes.

let valueInNumber = Number(age);// <--- here the string was converted to number.

console.log(valueInNumber);// Here the type of valueInNumber is number because we converted it to number.

// When conversion is not possible we get value as NaN or 0.
// If true --> then we get 1 vice versa for false.

// Boolean example :-

let isLoggedIn = 1 ; 

let BooleanisLoggedIn = Boolean(isLoggedIn);// <--- here the number was converted to boolean.

console.log(BooleanisLoggedIn);

// When "" is used we get answer as false.(if it is kept it gives out false)
// When "Atharva" is used we get answer as true.(basically if we put anything it gives out true)

let score = 8 ; 

let stringNumber = String(score); // <--- here the number was converted to string.

console.log(typeof stringNumber); // Here the type of stringNumber is string because we converted it to string.

console.log(stringNumber);

/*******************************OPERATIONS************************************************/