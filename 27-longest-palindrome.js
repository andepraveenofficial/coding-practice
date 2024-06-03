// Longest Palindrome

let str = "aabcdaea";  // O(1)

const obj = {};

for (let char of str){
    // O(n)
    obj[char] = obj[char] === undefined ? 1 : obj[char]+1
}

console.log(obj)

console.log("-----------------")

let longestPalindrome = 0;  // O(1)
const singles = [];
for (let [key, value] of Object.entries(obj)){
    // O(n)
    console.log(key, value)
    if (value % 2 === 0) {
        longestPalindrome = longestPalindrome + value
    }
    else if (value % 2 === 1){
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