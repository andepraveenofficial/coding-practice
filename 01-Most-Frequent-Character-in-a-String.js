// 01 Most Frequent Character in a String

/*
description :

Given a string, find the character that appears the most frequently. 
If multiple characters have the same frequency, return any one of them.

*/


const str = "abracadabra";

const obj = {};

let maximum = str[0];

for (let char of str){
    if (!obj[char]){
        obj[char] = 1;
    }
    else{
        obj[char]++;
    }

    if (obj[char] > obj[maximum]){
        maximum = char;
    }
}


console.log(maximum);  // a











