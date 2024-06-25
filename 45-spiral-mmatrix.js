// 08 Spiral Matrix

/*


Problem : Spiral Matrix
Hint :
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

*/

function display(matrix){
    for (let row of matrix){
        console.log(row)
    }

    console.log("-----------")
}


function rotateMatrix(matrix){
    const rows = matrix.length;
    const columns = matrix[0].length;
    const output = [];
    for (let colIndex=0; colIndex<columns; colIndex++){
        let addRow = [];
        for (let rowIndex=0; rowIndex<rows; rowIndex++){
            const item = matrix[rowIndex][colIndex]
            // console.log(item)
            addRow.push(item);
        }
        // console.log(addRow.reverse())
        output.push(addRow);
    }    

    return output.reverse();
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

// display(matrix);

let remainingItems = matrix.flat(2).length;

const spiral = [];

console.log("===========");


while (remainingItems !== 0){
    display(matrix)
    const shiftedROw = matrix.shift();
    spiral.push(...shiftedROw);
    remainingItems = matrix.flat(2).length;
    if (remainingItems > 0){
        matrix = rotateMatrix(matrix);
    }
}

console.log("=============")

console.log(spiral);

console.log("===============")
