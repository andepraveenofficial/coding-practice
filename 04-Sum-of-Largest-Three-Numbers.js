// Sum of Largest Three Numbers	

/*
Description :

1. Given an array of integers, find the sum of the three largest numbers.
2. Given an array of integers and a target sum, return the indices of the two numbers that add up to the target sum.		
*/


function bubbleSort(arr){
    for (let i=0; i<=arr.length; i++){
        let flag = true;
        for (let j=0; j<=arr.length; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    
        if (flag){
            break;
        }
    }

    return arr
}


let arr = [1, 2, 3, 4, 5];

const sortedArray = bubbleSort(arr);

const lastThreeItems = sortedArray.slice(-3);

const sum = lastThreeItems.reduce((acc, curr) => acc+curr);
console.log(sum)  // 12


/* ----------------------------------------- */

let integersArray = [2, 7, 11, 15];
let target = 9;	

let output = [];
for (let i = 0; i < integersArray.length; i++) {
    if (target < 0){
        break;
    }
    
    if (integersArray[i] <= target){
        output.push(i);
    }

    target = target - integersArray[i]
}

console.log(output[0], output.at(-1))  // 0 1