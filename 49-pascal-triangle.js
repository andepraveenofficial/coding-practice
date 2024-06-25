// 11 Pascal's Triangle

/*
Problem : Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

const rows = 5;

const pascalsTriangle = [];
for (let i=0; i<rows; i++){
    const aboveRow = pascalsTriangle[i-1];
    if (!pascalsTriangle[0]){
        pascalsTriangle.push([1]);
    }
    else{
    
        const row = [];
     for (let j=0; j<aboveRow.length-1; j++){
            const add = aboveRow[j] + aboveRow[j+1];
            row.push(add);
     }

     const finalRow = [1,...row, 1]
     pascalsTriangle.push(finalRow);
  
    }

    console.log(pascalsTriangle[i])
}

console.log("-----------------");

console.log(pascalsTriangle);

console.log("=============")

/*

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

*/
