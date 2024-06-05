
// 08 Reverse the order of words

/*
Reverse the order of words in a given string s. Each word is a sequence of non-space characters, separated by at least one space. Remove any leading, trailing, or multiple spaces between words. The reversed string should have only a single space separating the words. 
Example 1: 
Input: s = "the sky is blue" 
Output: "blue is sky the" 
Example 2: 
Input: s = " hello world " 
Output: "world hello" 
Explanation: Your reversed string should not contain leading or trailing spaces. 
Example 3: 
Input: s = "a good example" 
Output: "example good a" 
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string. 
  
Constraints: 
1 <= s.length <= 104 
s contains English letters (upper-case and lower-case), digits, and spaces ' '. 
There is at least one word in s. 
  
Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space? 
 */

const str = " hello world "
const wordsList = str.trim().split(/\s+/);  // split at space, tab, linebreak
reversedStr = wordsList.reverse().join(" ");  
console.log(reversedStr);  // world hello
