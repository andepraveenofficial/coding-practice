// 02 check palindrome number

/*
description : 

1. Write a function to check if a given number is a palindrome. 
2. Additionally, print all palindrome numbers in a given array.
*/


function checkPalindrome(original, revsersed){
  return original === revsersed ? true : false;
}

function getReverse(num){
    let reversedNum = 0

    while (num > 0){
        let lastDigit = num % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        num = parseInt(num / 10);
    }

    return reversedNum;
}


let num = 121;
const reverseNum = getReverse(num)
console.log(checkPalindrome(num, reverseNum))  // true


const numList = [123, 121, 454, 567];

const palindromeNumList = numList.filter((num) => {
    const reverseNum = getReverse(num);
    return checkPalindrome(num, reverseNum);
})

console.log(palindromeNumList);  // [ 121, 454 ]
