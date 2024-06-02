// 15 Fibonacci Sequence

/*
Description : 

Generate the first n numbers in the Fibonacci sequence.	
*/

let n = 5;

let fibonacciSeries = [0, 1];

let counter = 0;
while (n > fibonacciSeries.length){
    let nextNumber = fibonacciSeries[counter] + fibonacciSeries[counter+1]
    fibonacciSeries.push(nextNumber);
    counter++
}

console.log(fibonacciSeries)  // [ 0, 1, 1, 2, 3 ]







