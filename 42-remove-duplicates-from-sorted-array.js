// 05 Remove Duplicates from Sorted Array

/*
5.
Problem : Remove Duplicates from Sorted Array

Hint : Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
such that each unique element appears only once. The relative order of the elements should
be kept the same. Then return the number of unique elements in nums.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1
and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1,
2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order
*/

const arr = [0,0,1,1,1,2,2,3,3,4];
console.log(arr);

console.log("-------------")


for (let i=0; i<arr.length; i++){
    // console.log(arr[i])
    const currentItem = arr[i];
    const nextItem = arr[i+1];
    if (arr[i] !== nextItem){
        continue;
    }

    else if (currentItem !== "_"){
        const splicedItem = arr.splice(i+1, 1);
        arr.push("_");
        i--
    }
}

console.log(arr);


/*
// Another Way

const arr = [0,0,1,1,1,2,2,3,3,4];
console.log(arr);

console.log("-------------")

const uniqueList = [];

for (let i=arr.length-1; i>=0; i--){
    const firstItem = uniqueList[0]
    if (firstItem !== arr[i]){
        
        uniqueList.unshift(arr[i]);
    }
    else{
        uniqueList.push("_")
    }
    
}

console.log(uniqueList);  // [ 0,   1,   2,   3,   4, '_', '_', '_', '_', '_' ]

*/
  








