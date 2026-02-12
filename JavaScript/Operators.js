// Arithmetic Operator:-

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);  // Reminder
// console.log(5**3);


// Assignment Operator:-

// let x = 20;
// let y = 10;
// x = x+y;
// x = x-y;
// x = x*y;
// x =x/y;
// x =x%y;
// x = x**y;
// x+=y;
// x-=y;
// x*=y;
// x/=y;
// x%=y;
// console.log(x);t


// Comparison Operator:-

// let x = 20;
// let y = 10;
// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x===y) // First, Check the type of both Operands and then Compare.

// 20 == "20"  Gives True.   // String is automatically converted to Number and then compared.
// 20 === "20"  Gives False. // Both operands is not of same type i.e. One is Number and another is String


// Number and String Compare:-
// String--> Number. Conversion:-

// let z = "120";
// let a = Number(z);
// console.log(a);  // Output -> 120
// console.log(typeof a);  // Output -> Number

// let z = "120ac";
// let a = Number(z);
// console.log(a);  // Output -> NaN: Not a number.NaN is of type Number.

// console.log(0/0);  // Output -> NaN: Not a number.NaN is of type Number.

// let a = "121ac";
// let b = Number(a);
// console.log(typeof b);  // Output -> Number


// Boolean -> Number Conversion:-

// let a = true;
// console.log(Number(true));  // Output -> 1
// console.log(Number(false));  // Output -> 0

// console.log(Number(null));  // Output -> 0
// console.log(Number(undefined));  // Output -> NaN


// Number -> String Conversion:-

// let a = 10;
// let b = String(a);
// console.log(typeof b);  // Output -> String
// "true"
// true

// console.log(typeof String(undefined));  // Output -> String
// console.log(typeof String(null));  // Output -> String
// console.log(typeof String(true));  // Output -> String
// console.log(typeof String(false));  // Output -> String


// Boolean Conversions:-

// console.log(Boolean(0));   // Output -> False
// console.log(Boolean(""));  // Output -> False
// console.log(Boolean(null));  // Output -> False
// console.log(Boolean(10));  // Output -> True
// console.log(Boolean("0"));  // Output -> True
// console.log(Boolean(-100));  // Output -> True
// console.log(Boolean("-110"));  // Output -> True
// console.log(Boolean("Hello"));  // Output -> True

// 0,"",null gives False, else gives True.


// Computer Science Challenge

// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c == 0.3);  // Output -> False
// console.log(c);  // Output -> 0.30000000000000004

// 1: Null is loosely equal to Undefined only.

// console.log(null==undefined);  // Output -> True
// console.log(null===undefined);  // Output -> False
// console.log(null==0);  // Output -> False
// console.log(null=="");  // Output -> False
// console.log(null==false);  // Output -> False
// console.log(null==true);  // Output -> False

// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0);  // Output -> True
// console.log(null<=0);  // Output -> True
// console.log(null>0);  // Output -> False
// console.log(null<0);  // Output -> True
// console.log(null>=undefined);  // Output -> False
// console.log(undefined>=0);  // Output -> False

// console.log("Aman">"Aman");  // Output -> False
// console.log("Aman">="Aman");  // Output -> True
// console.log("Aman"<"Aman");  // Output -> False
// console.log("Aman"<="Aman");  // Output -> True
// console.log("Aman"=="Aman");  // Output -> True
// console.log("Aman"==="Aman");  // Output -> True

// console.log(10<true);  // Output -> False
// console.log(10<=true);  // Output -> False
// console.log(10>true);  // Output -> True
// console.log(10>=true);  // Output -> true
// console.log(10<"10");  // Output -> False
// console.log(10<="10");  // Output -> True

// console.log("Aman">"Naman");  // Output -> False
// console.log("Aman"<"Naman");  // Output -> True
// console.log("Aman">"Avdesh");  // Output -> False
// console.log("Aman"<"Avdesh");  // Output -> True

// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// Dono number mein convert honge

// console.log(null>="");  // Output -> True
// console.log(null>"");  //  Output -> False

// console.log(NaN == NaN);  // Output -> False


// Logical Operator:-

// Logical && :-

console.log(true&&true);  // Output -> True
console.log(true&&false);  // Output -> False
console.log(false&&true);  // Output -> False
console.log(false&&false);  // Output -> False

// let a = "Rohit";
// let b = "";
// let c = a&&b;
// console.log(c);

// let a = "Rohit";
// let b = "Mohit";
// let c = a&&b;
// console.log(c);

// let a = 0;
// let b = 20;
// console.log(a&&b);

// && : If first value is false, it will return the first value itself.
// && : If first value is true, it will return the second value.


// Logical || :-

console.log(true||true);  // Output -> True
console.log(true||false);  // Output -> True
console.log(false||true);  // Output -> True
console.log(false||false);  // Output -> False

let a = 0;
let b = 20;
console.log(a||b);

// || : If first value is true, it will return the first value itself.
// || : If first value is false, it will return the second value.

// Logical ! :-

// console.log(5!=5);

// console.log(2&5);  // Output -> 0