// 9. Valid Parentheses
/*
Given a string s containing parentheses ((), {}, and []), check if the parentheses are balanced and properly nested. Each opening parenthesis must have a closing parenthesis of the same type in the correct order. 
Example 1: 
Input: s = "()" 
Output: true 
Example 2: 
Input: s = "()[]{}" 
Output: true 
Example 3: 
Input: s = "(]" 
Output: false 
  
Constraints: 
1 <= s.length <= 104 
s consists of parentheses only '()[]{}'. 
*/

const parentheses = "()[]{}"
const stack = [];

const opening = "{[("
const closing = ")]}"
for (let char of parentheses) {
    console.log(stack)
    if (opening.includes(char)){
        stack.push(char)
    }
    else{
        if (char === ")"){
            if(stack[stack.length-1] === "("){
                stack.pop()
            }
        }
        else if  (char === "]"){
            if(stack[stack.length-1] === "["){
                stack.pop()
            }
        }
        else{
            if(stack[stack.length-1] === "{"){
                stack.pop()
            } 
        }
        
    }
}

if (stack.length === 0){
    console.log(true)
}
else{
    console.log(false)
}
