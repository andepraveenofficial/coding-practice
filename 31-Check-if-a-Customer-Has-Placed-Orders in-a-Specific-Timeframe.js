// 4. Check if a Customer Has Placed Orders in a Specific Timeframe

const customerData = { 
  "id": 123, 
  "name": "David", 
  "orders": [ 
    { "id": 1, "date": "2024-05-20" }, 
    { "id": 2, "date": "2024-06-01" }, 
    { "id": 3, "date": "2024-04-15" } 
  ] 
}; 
// console.log(new Date("2024-05-20") > new Date("2024-06-01"))

let output = true
const initialTime = customerData?.orders[0]?.date; // 2024-05-20

for (let {date} of customerData?.orders){
    if (new Date(initialTime) === new Date(date)){
      initialTime = date
      output = true
    }
    else if(new Date(initialTime) < new Date(date)) {
      initialTime = date
      output = true
    }
    else{
      output = false
      break
    }
}


console.log(output)



