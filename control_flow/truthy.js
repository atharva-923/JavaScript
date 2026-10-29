//falsy Values: false, 0, -0, 0n, "", null, undefined, NaN , BigInt
//Truthy Values: "0", 'false', " ", [], {}, function(){}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}