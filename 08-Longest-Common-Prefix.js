// 08 Longest Common Prefix	
// 08 Sort Map by Values

/*
Description :
 
08 Longest Common Prefix :
Given an array of strings, find the longest common prefix. If there is no common prefix, return an empty string.	

08 Sort Map by Values :
Given a map, sort it by its values and return the sorted map.
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

/* -----------------------------------------*/

let originalMap = { "a": 3, "b": 1, "c": 2 };



let objectEntries = Object.entries(originalMap);
console.log(objectEntries);

for (let i=0; i<objectEntries.length; i++){
    let flag = true;
    for (let j=0; j<objectEntries.length-1; j++){
        if (objectEntries[j][1] > objectEntries[j+1][1]){
            [objectEntries[j], objectEntries[j+1]] = [objectEntries[j+1], objectEntries[j]]
            flag = false;
        }
    }

    if (!flag){
        break;
    }
}

console.log(objectEntries);

let sortedObject = Object.fromEntries(objectEntries);
console.log(sortedObject);  // { b: 1, c: 2, a: 3 }