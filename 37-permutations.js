// Permutations


const str = "1234"

let output1 = []
let last = str.at(-1);
console.log(last)
output1 = [last]


let lastSecond = str.at(-2)
console.log(lastSecond)

/*
1234
=========
4
---
34  43
---------
234 324 342  243  423 432
---------
1234 2134 2314 2341
1324 3124 3214 3241
1342 3142 3412 3421
1243 2143 2413 2431
1423 4123 4213 4231
1432 4132 4312 4321
================
Total 25 arrangements
==================
*/
