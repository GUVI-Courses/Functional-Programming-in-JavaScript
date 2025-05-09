/*
// MAP

console.log("MAP: Creates a new array by applying a function to each element.")

const numbers =[ 1,2,3,4,5,6 ];
const doubleNumbers = numbers.map(num=>num*2);
console.log("map res",doubleNumbers)
*/

/*
// filter
console.log("filter:Creates a new array with all elements that pass the test implemented by the provided function. ")

const numbers =[ 1,2,3,4];
const evenNumber=numbers.filter(number=>number % 2===0)
console.log("filter res",evenNumber)

*/

/*
// Reduce
console.log("Reduce : Executes a function on each element to reduce the array to a single value.")
const numbers=[1,2,3,4,5];
const sum = numbers.reduce((total,num)=>total+num,0)
console.log(sum)
*/


console.log("Chaining Array methods")

const numbers=[1,2,3,4,5,6];
const processedNumbers = numbers.filter(num=>num%2===0).map(num=>num*2).reduce((total,num)=>total+num,0);

console.log("final res ",processedNumbers)

// 2 4 6 => 4 8 12 => 24