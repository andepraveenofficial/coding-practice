// 20 Merge Intervals

/*
Description :

Given an array of intervals, merge all overlapping intervals.
*/

const arr = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedArray = [];

for (let row=0; row < arr.length; row++){
    for (let col=0; col<arr[row].length; col++){
        mergedArray.push(arr[row][col]);
    }
}

console.log(mergedArray)  // [ 1,  3,  2,  6, 8, 10, 15, 18 ]

for (let i=0; i<mergedArray.length; i++){
    for (let j=i+1; j<mergedArray.length-1; j++){
        if (mergedArray[j] > mergedArray[j+1]){
            mergedArray.splice(j, 2);
        }
    }
}

console.log(mergedArray);  // [ 1, 6, 8, 10, 15, 18 ]

const output = [];
while (mergedArray.length !== 0){
    let add = mergedArray.splice(0, 2);
    output.push(add);
}

console.log(output)  // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
