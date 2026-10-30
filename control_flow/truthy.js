//falsy Values: false, 0, -0, 0n, "", null, undefined, NaN , BigInt
//Truthy Values: "0", 'false', " ", [], {}, function(){}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

let val1;
// val1 = 5 ?? 10 outputs 5 because 5 is not null or undefined
// val1 = null ?? 10 outputs 10 because null is null or undefined
// val1 = undefined ?? 15 outputs 15 because undefined is null or undefined
val1 = null ?? 10 ?? 20 // outputs 10 because null is null or undefined, so it moves to the next value which is 10

console.log(val1);