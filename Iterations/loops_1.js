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
map.set('Name', 'Atharva')
map.set('Age', 20)
map.set('City', 'Virar')
console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key, value] of map){
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'Minecraft',
    game2: 'GTA',
    game3: 'Resident Evil'
}

for(const [key, value] of myObject){
    console.log(key, ':-', value);
}