// 1. Find All Products with a Discount

const data = { 
  "products": [ 
    { "id": 1, "name": "Shirt", "price": 20, "discount": 10 }, 
    { "id": 2, "name": "Hat", "price": 15 }, 
    { "id": 3, "categories": ["Clothing", "Winter"], "price": 30, "discount": 5 } 
  ] 
}

const discountProducts = data["products"].filter((product) => product.discount && product)

console.log(discountProducts);