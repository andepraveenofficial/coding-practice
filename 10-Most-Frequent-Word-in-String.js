// 10 Most Frequent Word in String

/*
Description :

Given a string, find the word that occurs the most frequently.	
*/

const str =  "the quick brown fox jumps over the lazy dog the quick";
const wordsArray = str.split(" ");

const obj = {};

let mostFrequentWord = wordsArray[0];
for (let word of wordsArray){
    obj[word] = obj[word] === undefined ? 1 : obj[word]+1
    if (obj[mostFrequentWord] < obj[word]){
        mostFrequentWord = word
    }
}

console.log(mostFrequentWord)
