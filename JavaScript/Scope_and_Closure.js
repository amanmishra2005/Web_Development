// Scope and Closure:-

// Global Scope:- Accessible to Everyone

// let a = 10;
// const b = 20;

// console.log(a);

// Block-Level Scope:- Accessible to only that Block

// if(true){
//     console.log(b);
// }

// Functional Scope:- Accessible to only that Function

// function greet(){
//     let c = 30;
//     console.log(a);
//     console.log(c);
// }

// greet();

// console.log(c);  // Defined in function greet

// let global = 40;

// function greet(){
//     let global = 50;
//     console.log(global);
//     function meet(){
//         let global = 150;
//         console.log(global);
//     }
//     meet(); // First looks in function then outside
// }

// greet(); // First looks in function then outside

// function createCounter(){
//     function increment(){
//         console.log("I am Increment function");
//     }
//     return increment;
// }

// const count  = createCounter();
// console.log(count);
// count();

// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }

// console.log(count); // Defined in function

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let user = {
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount == "number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount == "number" && amount>0){
//             this.balance-=amount;
//             return this.balance;
//         }
//     },
//     getBalance: function(){
//         return this.balance;
//     }
// }

// console.log(user.deposit(200));
// user.balance = "Aman";  // Accidental Access
// console.log(user.getBalance());


// function createBankAccount(){

//     let balance = 500;

//     const user = {
//     deposit: function(amount){
//         if(typeof amount == "number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount == "number" && amount>0){
//             balance-=amount;
//             return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
// }
// return user;
// }

// balance+=100; // Can't access

// const customer = createBankAccount();
// console.log("Availabel Balance: "+customer.deposit(500));
// console.log("Availabel Balance: "+customer.withdraw(200));
// console.log(customer.balance); // Undefined

// function createBankAccount(){

//     let balance = 500;

//     return {
//     deposit: function(amount){
//         if(typeof amount == "number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount == "number" && amount>0){
//             balance-=amount;
//             return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
//     }
// }

// balance+=100; // Can't access

// const customer = createBankAccount();
// console.log("Availabel Balance: "+customer.deposit(500));
// console.log("Availabel Balance: "+customer.withdraw(200));
// console.log(customer.balance); // Undefined

// function double(){
//     function execute(){
//         console.log("Hello");
//     }
//     return execute;
// }
// const n = double();
// n();

function double(value){
    return function execute(num){
        return value*num;
    }
}
// const n = double(20);
// // console.log(n);
// console.log(n(5));

const n = double(20)(5);
console.log(n);
