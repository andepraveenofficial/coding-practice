// 01 Most Frequent Character in a String

/*
description :

Given a string, find the character that appears the most frequently. 
If multiple characters have the same frequency, return any one of them.

*/

const str = "abracadabrar";

const obj = {};
let maxReapeated = null;
for (let char of str){
    if (!obj[char]){
        obj[char] = 1
    }
    else{
        obj[char]++
    }

    console.log(obj)

    if (!maxReapeated){
        maxReapeated = char
    }
    else{
        if (obj[char] > obj[maxReapeated]){
            maxReapeated = char
        }
    }
    console.log(maxReapeated)
}


console.log("------------")

console.log(maxReapeated);  // a

console.log("--------------")










