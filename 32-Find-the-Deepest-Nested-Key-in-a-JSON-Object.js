// 5. Find the Deepest Nested Key in a JSON Object
 
const data = { 
  "level1": { 
    "level2": { 
      "level3": "This is the deepest value" 
    } 
  }, 
  "anotherKey": "Not the deepest" 
}; 


function deepestKey(data, key){
  console.log(data, key)
  console.log("---------------")
    if (typeof data[key] === "object"){
      let childData = data[key]
        let childKey = Object.keys(data[key])[0]
        return deepestKey(childData, childKey)  // recursive call
    }
    else{
      return data[key]
    }
}



const result = deepestKey(data, Object.keys(data)[0]);


console.log("===================")

console.log(result) // This is the deepest value

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