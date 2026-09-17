const arr = [1,2,3,4,5]// create an array using the array literal syntax

const arr1 = new Array(1,2,3,4,5)// create an array using the Array constructor

console.log(arr);
console.log(arr1);

// array methods

arr.push(6) // add element at the end of the array
arr.pop() // remove element from the end of the array
console.log(arr);

arr.unshift(9) // add element at the start of the array
console.log(arr);
arr.shift() // remove element from the start of the array
console.log(arr);

console.log(arr.includes(9));// check if the array includes a certain element
console.log(arr.indexOf(5));// check the index of a certain element in the array

const newArr = arr.join()// create a new array from the existing array
console.log(typeof newArr); // string, Why? answer: because join() method returns a string by joining all the elements of the array with a specified separator (default is comma).
console.log(newArr);

// slice , splice

const arr2 = [1,2,3,4,5,6,7,8,9]
const newArr2 = arr2.slice(2,5) // create a new array from the existing array from index 2 to index 5 (not including index 5)
console.log('slice:', newArr2);

const newArr3 = arr2.splice(2,5) // remove elements from the existing array from index 2 to index 5 (not including index 5)
console.log('splice:', newArr3);
console.log('original array:', arr2); // original array is modified