const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hi there!";
for (const greet of greetings) {
    console.log(`Each character: ${greet}`);
}

//Maps 

const map = new Map()
map.set('Name', 'John')
map.set('Age', 30)
map.set('City', 'New York')
console.log(map);

for(const key of map){
    console.log(key);
}