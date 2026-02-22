// This, Call, Apply, Bind:-

// this: Class Object Method

// Strict Mode vs Non-Strict Mode:-

// Global Object: In window it is called 'Window', In Node JS, it is called Global.
// globalThis: Points to global object of any environment.

// Normal Function: 
// In Non-Strict Mode: It will point to Global Object.
// In Strict Mode: It will point to Undefined.

// this keyword in global scope: 
// Node JS - {}, In browser - global Object
// Arrow Function take this kewyord from its Lexical Environment Scope.
// call, apply, bind :- Points to the invoking object.


//  In class constructor, this will point to newly created empty object.

// 'use strict'

// var a = 10;
// var b = 20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit");

// document.getElementById("first");
// console.log(globalThis);


// Learn about this keyword
// 'use strict'

// console.log(this);


// Function:-

// 100 user: greet function: 100*memory , 100 times code, copy, paste.

// 'use strict'

// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name= name;
//     console.log(this.age);
//     console.log(this.name)
// }

// const user = {
//     name:"Rohit",
//     age:30,
// }

// const user2 = {
//     name:"Mohit",
//     age:10
// }

// greet.call(user);
// greet.call(user2);

// incrementAge.call(user2,10,"Mohan");
// incrementAge.apply(user2,[10,"Mohan"]);
// const incr = incrementAge.bind(user2,10,"Mohan");

// incr();

// this == user

// user2.greet();

// 'use strict'


// function greet(){
//     console.log(this);
// }

// greet();


// Class:-

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// // this = {name:"Rohit", age:20}

// const p1 = new Person("Rohit",20);

// console.log(p1);

// Arrow Function: this doesnt exist for arrow function, it takes this kewyord from its Lexical Environment Scope.

// 'use strict'

// console.log(this);

// const greet = ()=>{
//     console.log(this);
// }

// function meet(){
//     console.log(this);
// }

// greet();

// 'use strict'

// const user = {
//     name:"Rohit",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();

// const stopWatch = {
//     second:0,
//     start: function(){
         
//         const that = this;
//         setInterval(function(){
//           that.second++;
//           console.log(that.second);
//         },1000);
//     }
// }

// const stopWatch = {
//     second:0,
//     start: function(){
//          console.log(this);
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// };

// stopWatch.start();
// 'use strict'

// console.log(this);

// const user = {
//     name:"Rohit",
//     greet: ()=>{
//         console.log(this);
//     }
// }

// user.greet();

// const button = document.getElementById("first");

// button.addEventListener('click',()=>{
//     console.log(this);
// })


// this keyword: Global scope in Node Js: {}
// Windows: Window Object

// Function: 
// this keyword:- if someone invoke the method or function, this will point to that
// Normal function: When no one is invoking it, 
// Non-Strict Mode: Global Object for node and browser
// Strict Mode: Undefined

// Arrow Function: It takes this from its Lexical Enoviroment Scope.

// 'use strict'
// function greet(){
//     console.log(this);
// }

// greet();