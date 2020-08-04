//create a function that outputs the factorial of a given input 5! 5 * 4 * 3 * 2 * 1

function factorial(num) {
    //create base case, if value is equal to zero return 1
    if (num === 0) {
        return 1;
    }
    //multiply the value by value -1
    console.log(`you multiplied ${num} from ${num -1}`)

    return num * factorial(num - 1)
}

let num = 4;


//create a function that outputs the next number in the Fibonacci sequence, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

function fibonacci(val) {
    // If the number is greater than or equal to zero rerturn 1
    if(val < 2) {
        return 1;
    } else
    console.log(`The value is ${val}`)
    // add the value minus 1 to the value minus 2
    return fibonacci(val - 2) + fibonacci(val - 1)
}

console.log(fibonacci(7))

console.log( `the result of ${num} is ${factorial(num)} `)
