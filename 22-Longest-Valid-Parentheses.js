// 22 Longest Valid Parentheses

/*
Description : 

 Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring. 
*/


let str = "(()))())()";

let maxLength = 0;

let stack = [-1];

 for (let index in str){
    let char = str[index]
    if (char === "("){
        stack.push(index);
    }
    else{
        stack.pop();

        if (stack.length === 0){
            stack.push(index);
        }
        else{
            let length = index - stack[stack.length - 1];
            maxLength = Math.max(maxLength, length)
        }
    }
 }

 console.log(maxLength);  // 4


/*
"(()))())("
 01234

*/
