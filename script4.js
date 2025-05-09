/*
Higher-Order Function Example in JavaScript
A Higher-Order Function is a function that either:

Takes one or more functions as arguments, or
Returns a function as its result
*/

// const numbers=[1,2,3,4,5];
// const squaredNumbers = numbers.map(num=>num*num);
// console.log(squaredNumbers)



function createMultiplier(multiplier)
{
    return function(num)
    {
        return num*multiplier
    }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)) //10
console.log(triple(5)) //15