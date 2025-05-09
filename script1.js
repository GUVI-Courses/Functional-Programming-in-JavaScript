/*
console.log('Function Composition: Combining multiple functions to create a new function')

const addOne= x=>x+1;
const multiplyByTwo=x=>x*2;
const compose =(f,g)=>x=>f(g(x));
const addOneThenMultiply = compose(multiplyByTwo,addOne)
console.log(addOneThenMultiply(5))
*/

/*
console.log("Currying : Transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.")

const curry = (fn)=>(x)=>(y)=>fn(x,y);
const add =(x,y)=>x+y;
const curriedAdd=curry(add);
console.log(curriedAdd(5)(3))
*/

// console.log("Closures : Functions that have access to their outer scope variables even when called outside of that scope.")

// function createGreeting(greeting)
// {
//     return function(name)
//     {
//         console.log(greeting+ ' ' + name)
//     }
// }

// const greet= createGreeting("Good Morning..")
// greet('Jhon')

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(counter.getCount()); // 1
