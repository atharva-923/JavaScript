const name = "Atharva";

const age = 19 ;

// console.log("My name is " + name + " and I am " + age + " years old."); old method

console.log(`My name is ${name} and I am ${age} years old.`); // new method

const name1 = new String('Atharva');

console.log(name1);
console.log(name1.indexOf('t'));
console.log(name1.charAt(6));

console.log(name1.slice(0 , 2));//it will slice the string from index 0 to index 2 but not including index 2

console.log(name1.substring(-6 , 3));// it will slice the string from index 0 to index 3 but not including index 3

const name2 = "     Atharva     ";

console.log(name2);
console.log(name2.trim());

console.log(name1.replace('A','@'));

const name3 = 'Atharva Avinash Patil'

console.log(name3.split(' '));