// 5. Find the Deepest Nested Key in a JSON Object
 
const data = { 
  "level1": { 
    "level2": { 
      "level3": "This is the deepest value at level3" 
    } 
  }, 
  "anotherKey": "Not the deepest" 
}; 


function nestedKey(data){
  if (typeof data === "object"){
      const mainKey = Object.keys(data)[0]
      console.log(mainKey)
      nestedKey(data[mainKey])
  }   
  else{
      console.log("No more nested keys")
      console.log("-----------")
      console.log(data)
  }
}



const result = nestedKey(data);


console.log("===================")

nestedKey(data) // This is the deepest value

console.log("===================")



/*

data = { 
  "level1": { 
    "level2": { 
      "level3": "This is the deepest value" 
    } 
  }, 
  "anotherKey": "Not the deepest" 
}; 

leve1

-----------------------------
"level1": { 
    "level2": { 
      "level3": "This is the deepest value" 
    } 
  }, 

 level2
 
 -----------------------------

 "level2": { 
      "level3": "This is the deepest value" 
    } 

  level3

  ----------------------

*/