// 26 Combination Sum

/*
Description :

Given an array of distinct integers and a target, return all unique combinations that sum up to the target.	

2 2 3
7
*/

const arr = [2, 3, 6, 7];
const target = 7;

const bigArray = [];

for (let num of arr){
    let temp = [];
    let value = temp.reduce((acc, curr) => acc+curr, 0);
    while (value < target){
            temp.push(num);
            value = temp.reduce((acc, curr) => acc+curr, 0);
    }
    bigArray.push(...temp);
}

console.log(bigArray);  // [2, 2, 2, 3, 3, 6, 7 ]

console.log("-----------------")

let output = [];

for (let i=0; i<bigArray.length; i++){
    for (let j=i+1; j<=bigArray.length; j++){
        let part = bigArray.slice(i, j);
        console.log(part)
        let value = part.reduce((acc, curr) => acc+curr);
        if (value === target){
            output.push(part);
        }
    }
}

console.log("-----------------------")

console.log(output);  // [ [ 2, 2, 3 ], [ 7 ] ]

console.log("============================")