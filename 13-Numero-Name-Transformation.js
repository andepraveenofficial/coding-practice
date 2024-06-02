// 13 Numero Name Transformation	

/*
Description :

Write a function that transforms a given string into a "numero name". 
The output should be the first character, the number of characters between the first and last characters, and the last character. 
Subsequent queries should reduce the number by 1.	
*/


class NumeroNameTransformer{
    // Initialization
    constructor(name){
        this.name = name.toLowerCase();
        this.middleLength = name.length-2;
    }

    getNumeroName(){
        let firstChar  = this.name[0];
        let lastChar = this.name[this.name.length-1];
        const result = `${firstChar}${this.middleLength}${lastChar}`;
        this.middleLength = Math.max(0, this.middleLength-1);
        return result;
    }
}

let name = "India"
const transformer = new NumeroNameTransformer(name);

console.log(transformer.getNumeroName());  // i3a
console.log(transformer.getNumeroName());  // i2a
console.log(transformer.getNumeroName());  // i1a
console.log(transformer.getNumeroName());  // i0a
console.log(transformer.getNumeroName());  // i0a

