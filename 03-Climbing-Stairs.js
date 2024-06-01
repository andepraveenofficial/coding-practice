// 01 Climbing Stairs

/*
Description : 

Given a number of steps n, write a function to determine the number of distinct ways to climb to the top, taking 1 or 2 steps at a time.	

ways : 5

1 1 1 1
1 1 2
1 2 1
2 1 1
2 2

*/
let steps = 4;
let frequency = [1,2];

function factorial(num){
    if (num === 1){
        return num;
    }
    else{
        return num * factorial(num - 1);
    }
}


let arr = [...Array(steps).fill(frequency[0]), ...Array(steps).fill(frequency[1])];
console.log(arr)  // [1,1,1,1,2,2,2,2]

let ways = 0;
for (let i=0; i<arr.length; i++){
   for (let j=i+1; j<arr.length; j++){
        let part = arr.slice(i,j);
        const sum = part.reduce((acc, curr) => acc+curr);

        if ( sum === steps){
            let uniqueItems = [...new Set(part)].length;
            const add = factorial(uniqueItems);  // arrangements
            ways = ways + add
           }
   }
}

console.log(ways);  // 5



