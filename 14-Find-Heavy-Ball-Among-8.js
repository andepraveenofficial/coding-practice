// 14 Find Heavy Ball Among 8 -> Using Balance Scale

/*
Description :

Given 8 balls, where 7 have equal weight and 1 is heavier, determine the minimum number of iterations to find the heavy ball.	
*/

function findHeavyBall(balls) {
    // First Weighing
    let group1 = balls.slice(0, 3);
    let group2 = balls.slice(3, 6);
    let group3 = balls.slice(6, 8);

    let weightGroup1 = group1.reduce((a, b) => a + b, 0);
    let weightGroup2 = group2.reduce((a, b) => a + b, 0);

    if (weightGroup1 > weightGroup2) {
        return weighThree(group1);
    } else if (weightGroup1 < weightGroup2) {
        return weighThree(group2);
    } else {
        return group3[0] > group3[1] ? 6 : 7;
    }
}

function weighThree(group) {
    if (group[0] > group[1]) {
        return balls.indexOf(group[0]);
    } else if (group[0] < group[1]) {
        return balls.indexOf(group[1]);
    } else {
        return balls.indexOf(group[2]);
    }
}

// Example usage:
let balls = [1, 1, 1, 2, 1, 1, 1, 1];
console.log(findHeavyBall(balls)); // 3



/*
1 1 1   2 1 1   1 1

2 1  1
2 
*/


