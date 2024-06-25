// 07 Validate Bracket String

/*
Description : 

Given a string containing '(', ')', '{', '}', '[', and ']', determine if it is valid. 
A string is valid if brackets are closed in the correct order and match their types.	
*/

let str = "()[]{}";

let stack = [];
const opening = "{[("
const pairs = {
    "{":"}",
    "[":"]",
    "(":")"
}

 for (let char of str){
    console.log(char)
    if (opening.includes(char)){
        stack.push(char);
    }
    else{
        const peek = stack.at(-1) 
        if (pairs[peek] === char){
            stack.pop();
        }
    }
 }


 if (stack.length === 0){
    console.log(true)
 }
 else{
    console.log(false)
 }

 

/*

// One Way : 

let brackets = "()[]{}";

for (let i=0; i<brackets.length; i++){
    for (let j=0; j<brackets.length; j++){
        let open = brackets[j];
        let close = brackets[j+1];
        if (open === "(" && close === ")"){
            brackets = brackets.replace("()", "");
        }
        else if (open === "[" && close === "]"){
            brackets = brackets.replace("[]", "");
        }
        else if (open === "{" && close === "}"){
            brackets = brackets.replace("{}", "");
        }
    }
}

if (brackets.length === 0){
    console.log(true);  // true
}
else{
    console.log(false);
}
*/
