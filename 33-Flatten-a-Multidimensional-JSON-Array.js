// 6. Flatten a Multidimensional JSON Array: 
 
let data = [ 
  [1, 2, [3, 4]], 
  [5, [6, [7, 8]]] 
]; 

function flatten(data){
  let output = [];
  for (let item of data){
      if (typeof item !== "object"){
        output.push(item)
      }
      else{
        output.push(...flatten(item));
      }
      
  }
  return output
}

console.log(data)
console.log(flatten(data)); // [1,2,3,4,5,6,7,8]


/*
// Recursively Updated
const data2 = flatten(data)
console.log(data2)

const data3 = flatten(data2)
console.log(data3)

const data4 = flatten(data3)
console.log(data4)
*/


/*
Approach : 
[ [1, 2, [3, 4]], [5, [6, [7, 8]]] ]
[ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8 ] ] ]
[ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
[1, 2, 3, 4, 5, 6, 7, 8]

-------------------------

*/