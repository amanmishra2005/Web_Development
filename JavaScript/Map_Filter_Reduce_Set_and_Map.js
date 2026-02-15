// ForEach, Filter, Reduce, Map, Set :-

// ForEach:-

// const arr = [10,20,30,"Aman",40,50,60];

// arr.forEach((number)=>{
//     console.log(number);
// })

// arr.forEach((number,index,arr)=>{
//         console.log(number,index,arr);
// })

// const arr = [10,20,30,40,50,60];

// let sum = 0;

// arr.forEach((number)=>{
//     sum+=number;
// })

// console.log(sum);

// let obj = {
//     name:"Rohit",
//     deposit: function(amount){
//         console.log(amount);
//     }
// }

// obj.deposit(100);

// Filter:-

// const arr = [10,20,30,40,50,60];

// const newArr = arr.filter((number)=>number>25);

// console.log(newArr);

// const compare = (number)=>number>25;
// compare(20);

// this = [10,20,30,40,50,60];

// arr.filtering = function(compare){  // Only works for arr
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr = arr.filtering((number)=>number>25);

// console.log(newArr);

// let a = [20,40,60,80,100,120];

// Array.prototype.filtering = function(compare){  // Works for any array
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const answer = a.filtering((number)=>number>50);

// console.log(answer);

// Map:-

// const arr = [19,34,54,67,9,27,98,89];

// const newArr = arr.map((num)=>num*2);

// console.log(newArr);

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProduct = products.filter((product)=>product.price>50);
// console.log(newProduct);

// const newProduct = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price);
// console.log(newProduct);

// const ans = products.map((product)=>({name:product.name, price:product.price}));
// console.log(ans);

// const newProduct = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price}));
// console.log(newProduct);

// Reduce:-

// Here, accumulator = sum;
// const totalPrice = products.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue.price;
// },0) // 0 -> Initial value of accumulator.

// console.log(totalPrice);

// const totalPrice = products.reduce((accumulator,currentValue)=>{
//     if(currentValue.inStock){
//         return accumulator+currentValue.price;
//     }
//     else{
//         return accumulator;
//     }
// },0) // 0 -> Initial value of accumulator.

// console.log(totalPrice);

// Set:- Duplicate Values not allowed

// const arr = [10,20,30,10,20,10,40,60,50,40,30,20,10];
// console.log(arr);

// const s = new Set(arr);
// console.log(s);

// s.add(100);
// console.log(s);

// s.delete(10);
// console.log(s);

// console.log(s.has(20));
// console.log(s.has(23));

// console.log(s.size);

// s.clear();

// console.log(s.size);

// const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// const s1 = new Set(email);
// console.log(s1);

// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

// for(let num of s1){
//     console.log(num);
// }

// Map:-

const m1 = new Map([  // We can take any Datatype as key using Map
    ["Aman", 40],
    [2, "Aman"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);


m1.set({name:"Manish",age:20}, false);

// console.log(m1);
// console.log(m1.size);
// console.log(m1.has("Aman"));
// console.log(m1.has("Chaman"));

for(let [keys,value] of m1){
    console.log(keys, value);
}