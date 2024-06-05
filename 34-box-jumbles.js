// Box Jumble

/*
7. Imagine you have a box of jumbled letters for each word. If you can rearrange the letters in one box to get the same letters as another box, those are anagrams! 
For example, the letters in "eat" can be rearranged to form "tea". So, "eat" and "tea" are anagrams. 
Your task is to take a bunch of words and group them together based on whether they're made of the same jumbled letters. The order you return the groups in doesn't matter. 
Example 1: 
Input: strs = ["eat","tea","tan","ate","nat","bat"] 
Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 
 
Example 2: 
Input: strs = [""] 
Output: [[""]] 
Example 3: 
Input: strs = ["a"] 
Output: [["a"]] 
*/

let strs = ["eat","tea","tan","ate","nat","bat"] 


let output = [];

while (strs.length !== 0){
    if (strs.length === 1){
        let word1 = strs.shift();
        output.push([word1]);
        break
    }

    else{
        let word1 = strs.shift();
        let sortedWord1 = word1.split("").sort().join("")
        let group = [word1];
        for (let i = 0; i < strs.length; i++){
            let word2 = strs[i];
            let sortedWord2 = word2.split("").sort().join("")
            if (sortedWord1 === sortedWord2){
                group.push(word2);
            }
        }

        output.push(group)

        strs = strs.filter((word) => !group.includes(word))
    }


}

console.log(output);  // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

