// 02 Palindrome Number

/*
Problem : Palindrome Number

Given an integer x, return true if x is a
palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it
is not a palindrome.

*/

function reverseNum(num){
    let result = 0;
    while (num > 0){
        console.log(num, result)
        let digit = num % 10;  // remainder
        result = (result * 10) + digit;
        num = parseInt(num / 10);  // quotient
    }

    return result;
}

const num = 121;
console.log(num);
console.log("---------")

let output;
if (num < 0){
     output = false
}
else{
    const reversedNum = reverseNum(num)
    console.log(reversedNum)
    if (num === reversedNum){
        output = true
    }
}

console.log("-----------")
console.log(output);  // true

console.log("===============")
