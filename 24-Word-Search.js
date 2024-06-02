// Word Search	

/*
Description :

Given a 2D board and a word, find if the word exists in the grid.	
*/

const matrix = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
let word = "ABCCED";
let temp = word.split("");

const flag = false;
for (let row=0; row<matrix.length; row++){
    if (temp.length === 0) {
        break;
    }

    for (let col=0; col<matrix[0].length; col++){
        console.log(temp)
        const item = matrix[row][col];
            if (temp.includes(item)){
                const itemIndex = temp.findIndex((each) => each === item)
                temp.splice(itemIndex, 1);
            }
    }
}

if (temp.length === 0){
    console.log(true);  // true
}
else{
    console.log(false)
}