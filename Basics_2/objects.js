Object.create // constructor method

const mySym = Symbol('key1') // creating a symbol

const person = {
  name: 'Atharva',
  'full name': 'Atharva Patil',
  age: 19,
  [mySym]: 'myKey1', // using the symbol as a property key
  location: 'Virar',
  email:"atharva@gmail.com",
}

console.log(person.email) // accessing the email property of the person object;

// Why do we use [] to access the property of the object? Because if we use dot notation, it will look for a property with the name 'email' in the person object. But if we use [] notation, we can access the property using a variable or a string. In this case, we are using a string 'email' to access the email property of the person object.

console.log(person['email']) //We use '' to access the property of the object.
console.log(person['full name'])
console.log(person[mySym]) // accessing the property with the symbol key

person.email = 'atharva9@gmail.com'

console.log(person.email);

//Object.freeze(person) // freezing the object so that we cannot change the properties of the object

person.email = 'atharvaaa@gmail.com'

console.log(person);

person.greeting = function(){
    console.log("Hello JS user");
}
person.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(person.greeting());
console.log(person.greetingTwo());