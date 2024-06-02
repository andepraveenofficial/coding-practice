// 09 Find Palindrome Numbers in Array	

/*
Description : 

Write a function to find all palindrome numbers in a given integer array.
*/


let arr = [123, 121, 454, 567];
console.log(arr)

let num = 123;

function reverseNum(num){
    let reverseNum = 0;
    while (num > 0){
        let lastDigit = num % 10;
        reverseNum = (reverseNum * 10) + lastDigit
        num = parseInt(num / 10);
    }
    return reverseNum;
}


const palindromeNums = arr.filter((num) => {
    let reversedNum = reverseNum(num);
    if (num === reversedNum){
        return true;
    }
})

console.log(palindromeNums)  // [ 121, 454 ]



