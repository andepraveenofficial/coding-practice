// 05 Palindrome String Check Without Temp	

/*
Description : 

Write a function to check if a given string is a palindrome without using a temporary string.	
*/

let str = "abba";

let strLength = parseInt(str.length / 2) ;

let result = false;
for (let i=0; i<=strLength; i++){
    if(str[i] !== str.at(-i-1)){
        result = true;
        break;
    }
}

console.log(result); // false