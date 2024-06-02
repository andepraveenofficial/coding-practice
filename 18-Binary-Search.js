// 18 Binary Search

/*
Description :

Implement binary search to find a target value in a sorted array. 
*/

const arr = [1, 2, 3, 4, 5];
const target = 3;

let left = 0;
let right = arr.length - 1;
let mid = Math.floor((left + right) / 2); // It gives nearest round value

while (right >= left){
    if (arr[mid] === target){
        break;
    }
    else{
        if (target < arr[mid]){
            right = mid-1;
        }
        else{
            left = mid+1;
        }

        mid = Math.floor((left + right) / 2);
    }

}

console.log(mid)  // 2