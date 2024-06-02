// 17 Merge Two Sorted Arrays

/*
Description :

Merge two sorted arrays into one sorted array.	
*/

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let mergedSortedArray = [];

while (arr1.length > 0 || arr2.length > 0){
    if (arr1.length === 0){
            mergedSortedArray.push(...arr2)
            break;
    }

    if (arr2.length === 0){
        mergedSortedArray.push(...arr1)
        break;
    }

    if (arr1[0] < arr2[0]){
        mergedSortedArray.push(arr1.shift())
    }
    else{
        mergedSortedArray.push(arr2.shift())
    }
}


console.log(mergedSortedArray)  // [ 1, 2, 3, 4, 5, 6 ]