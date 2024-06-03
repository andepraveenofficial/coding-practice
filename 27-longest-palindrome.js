// Longest Palindrome

let str = "aabcdaea";  // O(1)

const obj = {};  // O(1)

for (let char of str){
    // O(n)
    obj[char] = obj[char] === undefined ? 1 : obj[char]+1
}

console.log(obj)

console.log("-----------------")

let longestPalindrome = 0;  // O(1)
const singles = [];  // O(1)
for (let [key, value] of Object.entries(obj)){
    // O(n)
    console.log(key, value)
    if (value % 2 === 0) {
        // O(1)
        longestPalindrome = longestPalindrome + value
    }
    else if (value % 2 === 1){
        // O(1)
        longestPalindrome = longestPalindrome + value-1
        singles.push(key)
    }
}


if (singles.length > 0){
    // O(1)
    longestPalindrome += 1
}

console.log("--------------")

console.log(longestPalindrome)

console.log("=================")

/*
Time Complexity :

O(1) + O(1) + O(1) + O(n) + O(n) + O(1) = O(n)
*/