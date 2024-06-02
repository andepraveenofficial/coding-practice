// 08 Longest Common Prefix	

/*
Description :
 
Given an array of strings, find the longest common prefix. If there is no common prefix, return an empty string.	
*/

const arr = ["flower", "flow", "flight"];

let counter = 0
let flag = true
let prefix = "";
while (flag){
    let tempPrefix = arr[0].slice(0, counter+1);
    for (let word of arr){
        if (!word.startsWith(tempPrefix)){
            flag = false;
            break
        }
    }

    if (flag){
        prefix = tempPrefix;
        counter++
    }
}

console.log(prefix); // fl