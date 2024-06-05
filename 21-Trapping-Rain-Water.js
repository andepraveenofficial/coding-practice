// 21 Trapping Rain Water

/*
Description :

Given n non-negative integers representing an elevation map, find how much water it can trap after raining.
*/

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const str = arr.join("");
const rainAreas = str.split("0");
console.log(rainAreas);
let totalWater = rainAreas.reduce((acc, curr) => acc < curr.length ? curr.length : acc, 0);
console.log(totalWater); // 6




/*
// one way :

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let result = 0
for (let i=0; i<arr.length; i++){
    const mainPart = arr.slice(0, i+1);
    console.log("-----------")
    console.log(mainPart)
    for (let j=0; j<mainPart.length; j++){
        const subPart = mainPart.slice(-j-1, mainPart.length);
        console.log(subPart)
        if (!subPart.includes(0)){
            if (result < subPart.length){
                result = subPart.length
            }
        }
    }
    console.log("-----------")
}

console.log(result);  // 6
*/
