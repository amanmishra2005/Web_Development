// Variables Declaration :-

console.log("Hello World");

let name = "Aman";
let age = 20;

console.log(name, age);

age = 21;

console.log(name, age);

const account = 123456789;

console.log(account);

// account = 1234;  // Can't Work

console.log(account);

// var a = 10;
// var a = 20;  // Error -> Same variable declared more than one time.

// console.log(a);

// if(true){
//     var a = 50;
// }

// console.log(a);    // Error -> Can be accessed out of Scope.

// so, We can't declare Variables using "var" keyword.


// DataTypes :-

// Primitive DataTypes - Numbers, Strings, Boolean, Undefined, Null, BigInt, Symbol

let a = 10;
let b = 2.36;
console.log(a,b);
// console.log(typeof a);
// console.log(typeof b);

let c = "Aman Mishra";
let d = 'AbCdEfGhIjKlMnOpQrStUvWxYz'
console.log(c,d);
// console.log(typeof c);
// console.log(typeof d);

let login = true;
let f = false;
console.log(login, f);
// console.log(typeof login);
// console.log(typeof f);

let user1;
// const g;  // Must have to give any value while Declaration.
console.log(user1);
// console.log(typeof user1);

let weather = null;
console.log(weather);
// console.log(typeof weather);

let num = 527457124764736864n;
console.log(num);
// console.log(typeof num);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1, id2);
console.log(id1 == id2);  // Symbol gives Unique values.
// console.log(typeof id1);
// console.log(typeof id2);


// Non-Primitive DataTypes - Arrays, Objects, Functions

let arr = [10, 20.67, "Aman", true, null];
console.log(arr);
// console.log(typeof arr);

let user = {
    name: "Aman",
    account: 12345,
    age: 18,
    category: 'General',
}
console.log(user);
// console.log(typeof user);

function print(){
    return console.log("Aman Pandit");
}
print();
// console.log(typeof print);

let p = function print(){     // Declared a Function in a variable
    return console.log("Aman Pandit");
}
p();
// console.log(typeof p);

// Primitive DataType is Immutable i.e Can't be changed
// Proof:-

let str = "Aman";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

str[0] = "P";
console.log(str[0]);

let m = 10;
let n = m;
console.log(m, n);

n = 50;
console.log(m, n);

// Primitive -> Pass by Value

// Non-Primitive DataType is Mutable i.e Can be changed
// Proof:-

let arrr = [10, 20, 30 ,40];
console.log(arrr);
arrr.push(50);
console.log(arrr);
arrr[0] = 60;
console.log(arrr);

let obj = {
    name:"Rohan",
    age: 17
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);

obj.name = "Mohan";
console.log(obj.name);
console.log(obj);

let obj1 = {
    name:"Chaman",
    age: 17
}
let obj2 = obj1;
console.log(obj1, obj2);

obj2.name = "Naman";
console.log(obj1, obj2);

// Non-Primitive -> Pass by Refrence