// 03 Valid Parentheses

/*
Problem : Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input
string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
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

/*
problem : Valid Parentheses

Approach : 
Data Structure -> Stack

Methods :
    * push()
    * display()
    * size()
    * isEmpty()
    * peek()
    * pop()
*/


class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.display().push(item);
    }

    display(){
        return this.items;
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if (this.isEmpty()){
            return null;
        }
        const peekItem = this.display()[this.size() - 1];
        return peekItem;
    }

    pop(){
        if (!this.peek()){
            return this.peek();
        }
        const poppedItem = this.display().pop();
        return poppedItem;
    }
}


const stack = new Stack();

const str = "()[]{}";

console.log(str);

console.log("-----------")

const opening = "{[(";

const obj = {
    "{":"}",
    "[":"]",
    "(":")"
}

for (let bracket of str){
    console.log(bracket);
    if (opening.includes(bracket)){
        stack.push(bracket);
    }
    else{
        if (obj[stack.peek()] === bracket){
            stack.pop();
        }
    }
}


console.log(stack.display());

if (stack.isEmpty()){
    console.log(true)
}
else{
    console.log(false)
}