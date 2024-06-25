// Climbing Stairs

/*
Problem : Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the
top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45

*/

// Pending
const steps = 3;
const stepsFrequency = [1, 2]
console.log(steps);

console.log("------------------")

const stepsArr = [];
for (let step of stepsFrequency) {
    const add = [];
    let total = add.reduce((acc, curr) => acc+curr, 0);
    while (total <= steps){
        total = add.reduce((acc, curr) => acc+curr, 0)

        if (total <= steps){
            add.push(step);
        }
        else{
            add.pop();
            break;
        }
    }
    stepsArr.push(...add);
}

console.log(stepsArr)


console.log("------------------")

const output = [];

for (let i=0; i<stepsArr.length; i++){
    const main = stepsArr.slice(0, stepsArr.length-i);
    // console.log(main)
    for (let j=0; j<main.length; j++){
        const sub = main.slice(j,);
        // console.log(sub)
        const total = sub.reduce((acc, curr) => acc+curr, 0)
        if (total === steps){
            console.log(sub);
            output.push(sub);
        }
    }
}

console.log("----------")

console.log(output);

console.log("===========");

