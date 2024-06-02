// 16 Factorial of a Number

/*
Description :

Write a function to calculate the factorial of a given number n.
*/

function findFactorial(num){
    if(num === 1){
        // Base Condition
        return num 
    }
   
        // Recursive Call
        let result = num * findFactorial(num-1)
        return result;

}


const n = 5;

let output = findFactorial(n);
console.log(output)  // 120