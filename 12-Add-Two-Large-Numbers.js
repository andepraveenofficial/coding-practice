// 12 Add Two Large Numbers

/*
Description :

Write a function to add two large numbers represented as strings. Handle overflow conditions.	
*/

const str1 = "123456789123456789"; 
const str2 = "987654321987654321";

// convert str to num
// console.log("0123".charCodeAt(0));  // 48 -> numbers starts from 48

function convertStrToNum(str){
    let num = BigInt(0);
    for (let i =0; i<str.length; i++){
        let unicode = str.charCodeAt(i);
        const add = unicode-48
        num = (num * BigInt(10)) + BigInt(add)
    }

   return num

}

const sum = convertStrToNum(str1) + convertStrToNum(str2);
console.log(sum.toString());  // "1111111111111111110"