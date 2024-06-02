// 19 Longest Substring Without Repeating Characters

/*
Description : 

Given a string, find the length of the longest substring without repeating characters.
*/

const str = "abcabcbb";
console.log(str);

const parts = [];

let longestSubPart = 1;
for (let i=0; i<str.length; i++){
    const mainPart = str.slice(0, i+1);
    for (let j=0; j<mainPart.length; j++){
        const subPart = mainPart.slice(-j-1, mainPart.length)
        // console.log(subPart)
        if (subPart.length === new Set(subPart).size){
            if (longestSubPart < subPart.length){
                console.log(subPart)
                longestSubPart = subPart.length;
            }
        }
    }
}

console.log(longestSubPart);  // 3