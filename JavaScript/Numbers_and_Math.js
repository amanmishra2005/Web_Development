// Number:-

// let a = 10;
// let b = 345.6821;
// let c = b.toFixed(2);  // Round off to two Decimal Digits.
// console.log(typeof c);  // Output -> String, toFixed() return String.
// console.log(c);

// console.log(b.toPrecision(5));  // Output -> 345.68 , First five digits taken. Returns String.
// console.log(b.toString());  // Number converted to string.

// let a = new Number(20);
// let b = new Number(20);
// console.log(typeof a); // Output -> Object
// console.log(typeof b);  // Output -> Object

// console.log(a==b);  // Output -> False

// console.log(Boolean(null));  // Output -> False
// console.log(Boolean(0));  // Output -> False
// console.log(Boolean({}));  // Output -> True
// console.log(Boolean(new Number(0)));  // Output -> True

// let b = 20;
// console.log(typeof b);  // Output -> Number

// let obj1 = {
//     name:"Aman"
// }

// let obj2 = obj1;
// console.log(obj1==obj2);  // Output -> True

// let obj2 = {
//     name:"Aman"
// }
// console.log(obj1==obj2);  // Output -> False

// Non-Primitive DataType: Copy by Reference. Compared on the basis of Reference.
// Primitive DataType: Copy by Value

// let a = 10;
// let b = a;
// console.log(a==b);  // Output -> True


// Math:-

console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.ceil(6.3));
console.log(Math.floor(6.3));
console.log(Math.log10(20));
console.log(Math.max(20,11,3421,12));
console.log(Math.random());  // Output -> [0,1): It will generate value between 0 and 1, where 0 is included but 1 is not included.



// Gamblig Game:(0-9)

console.log(Math.floor(Math.random()*10));  // (0-9)

console.log(Math.floor(Math.random()*10)+1);  // (1-10)

console.log(Math.floor(Math.random()*6)+1);  // (1-6)

// Formula = Math.floor(Math.random()*TotalNumberOfOutcome)+Shift

console.log(Math.floor(Math.random()*11)+15)  // (15-25)

// Formula = Math.floor(Math.random()*(max-min+1))+min

// OTP Generate: 4 digit: 1000-9999

console.log(Math.floor(Math.random()*(9999-1000+1))+1000);