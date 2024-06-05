// 03 Climbing Stairs

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

// One Way : Pending 

let steps = 4;
let frequency = [1, 2];

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


let arr = [...Array(steps).fill(frequency[0]), ...Array(steps).fill(frequency[1])];
// console.log(arr);  // Output: [1, 1, 1, 1, 2, 2, 2, 2]

let ways = [];
let uniqueWays = new Set()
let uniqueCombinations = new Set()
for (let i = 0; i < arr.length; i++){
   for (let j = i + 1; j <= arr.length; j++){
        let part = arr.slice(i, j);
        const sum = part.reduce((acc, curr) => acc + curr);

        if (sum === steps){
            ways.push(part)
            const stringPart = part.join("")
            uniqueWays.add(stringPart)
        }
   }
}

console.log( ways); 
console.log(uniqueWays);


/*
Approach :

let start = {
    1:{
        1:{
            1:{
                1:1,
                2:2
            },
            2:{
                1:1,
                2:2
            }
        },
        2:{
            1:{
                1:1,
                2:2
            },
            2:{
                1:1,
                2:2
            }
        }
    },
    2:{
        1:{
            1:{
                1:1,
                2:2
            },
            2:{
                1:1,
                2:2
            }
        },
        2:{
            1:{
                1:1,
                2:2
            },
            2:{
                1:1,
                2:2
            }
        }
    }
}


// Another Way : Pending

function createNestedObjects(steps, frequency){
    // Base Case
    if (steps === 1){
        let baseObj = {};
        baseObj[frequency[0]] = 1;
        baseObj[frequency[1]] = 2;
        return baseObj;
    }
    let obj = {};
    

    obj[frequency[0]] = createNestedObjects(steps-1, frequency);
    obj[frequency[1]] = createNestedObjects(steps-1, frequency);
    // console.log(obj)/

    return obj
}



let steps = 4;
let frequency = [1,2];

const stepsObj = createNestedObjects(steps, frequency);

*/










