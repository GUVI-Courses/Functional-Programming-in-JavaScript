// Recursively Calculating Factorial (Functional Approach)
// 4! = 4*3*2*1=24 
// function Factorial(n)
// {
//     return n===0?1:n*Factorial(n-1)
// }

// const res= Factorial(10)
// console.log(res)


// Recursive Sum of an Array

// function sumArray(arr)
// {

//     return arr.length===0?0:arr[0]+sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3, 4, 5]));


// Recursive Fibonacci Sequence
// 0 1 1 2 3 5 8 13

function Fibonacci(n)
{
    return n<=1?n:Fibonacci(n-1)+Fibonacci(n-2);
}

console.log(Fibonacci(6))