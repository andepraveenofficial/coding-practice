// 2. Calculate Total Order Amount with Tax
 
const order = { 
  "items": [ 
    { "id": 1, "name": "Book", "price": 10, "quantity": 2 }, 
    { "id": 2, "name": "Pen", "price": 2, "quantity": 3 }, 
  ], 
  "taxRate": 0.08 
}; 


const items = order["items"];
const taxRate = order["taxRate"];

console.log(items, taxRate)

const total = items.reduce((acc, item) => {
  const {price, quantity} = item;
  return acc + price * quantity;
}, 0)


const totalWithTax = total + (total*taxRate);

console.log(totalWithTax)  // 28.08