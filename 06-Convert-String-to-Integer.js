// 06 Convert String to Integer	

/*
Description : 

Write a function to convert a string of digits to an integer without type casting and parsing functions.

*/

const str = "123456";

let num = 0;

for (let i=0; i<str.length; i++){
    const unicode = str.charCodeAt(i);  // unicode -> numbers stats from 48
    // console.log(unicode)
    const add = unicode-48;
    num = (num * 10) + add;
}

console.log(num);

