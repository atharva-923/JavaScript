/* for(variable initialization; condition; increment) {
//      code block to be executed
}
*/

for(let i = 0 ; i < 10 ; i++) {
    const element = i;
    if (element === 5) {
        console.log("Found 5");
    }
    console.log(element);
}

for (let i = 1 ; i <= 10 ; i++) {
    console.log(`Iteration number: ${i}`);
    for (let j = 1 ; j <= 10 ; j++) {
        //console.log(`Inner loop value: ${j} and Outer loop: ${i}`);
        console.log(`Tables ${i} x ${j} = ${i * j}`);
    }
}

let myArray = ["Spiderman", "Ironman","Thor"];

for (let index = 0 ; index < myArray.length ; index++) {
    const element = myArray[index];
    console.log(`myArray elements: ${element}`);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}