// Object:-

// CRUD operation: Create Read Update Delete.

// Create:-

// const user = {
//    name: "Aman",
//    age: 20,
//    emailId: "aman@gmail.com",
//    amount: 3400,
//    "home address": "Gorakhpur"
// }

// Read:-

// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(user.name);

//  Update:-

// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);

// Delete:-

// delete user.emailId;
// console.log(user);


// const user = {
//    name: "Aman",
//    age: 20,
//    emailId: "aman@gmail.com",
//    amount: 3400,
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);

// Important:-

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// const user = {
//    name: "Aman",
//    age: 20,
//    emailId: "aman@gmail.com",
//    amount: 3400,
// }

// for of loop:-

// const temparr = Object.keys(user);
// console.log(temparr);

// for(let keys of temparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);
// }

// const name = user.name;
// const age = user.age;

// Destructuring Object:-

// const {name,age} = user;
// const {name:userName,age:userAge} = user;

// console.log(name,age);
// console.log(userName,userAge);

// Destructuring Array:-

// const arr = [10,20,40,90,11];
// const [first,second]= arr;

// console.log(first,second);


// const user = {
//    name: "Aman",
//    age: 20,
//    emailId: "aman@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

// Nested_Object:-

// const user = {
//    name: "Aman",
//    age: 20,
//    emailId: "aman@gmail.com",
//    amount: 3400,
//    address: {
//     city:"Gorakhpur",
//     state:"Uttar Pradesh"
//    }
// }


// console.log(user.address.city);

// Shallow-Copy:-

// const user2 = {...user};  // Copy of user (But upto 1 Level)
// user2.name = "Mohan";
// user2.address.city = "Urua Bazar";

// console.log(user2);
// console.log(user);

// console.log(user.address.city);

// Deep-Copy:-

// const user2 = structuredClone(user);  // Both user and user2 are completely independent.
// user2.address.city = "Urua Bazar";
// console.log(user);

// Key: String || Symbol.

// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hello Ji"
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3:40
// }

// console.log(user[sym]);