// Array:-

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// let marks = [100,50,70,80,90];

// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Rohit",true];

// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

// Push : Insert Element at End:-

// arr.push(90);
// arr.push("Strike");

// console.log(arr);

// Pop : Delete Element from End:-

// arr.pop();
// console.log(arr);

// arr.unshift(10);  // Add in Front
// arr.unshift(50);  // Add in Front
// console.log(arr);

// arr.shift();  // Delete from Front
// console.log(arr);


// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr);
// Object : Non-Primitive -> Copy by Reference
// Primitive: Copy by value

// const arr = [10,30,50,90,11];
// arr[2] = 30;

// console.log(arr);

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);  // Temporary Slicing
// console.log(arr);
// const arr3 = arr.splice(1,3,"Rohit",19);  // Permanent Slicing
// console.log(arr3);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);  // Merge
// const arr3 = [arr,arr2,arr4];

// Spread Operator:-

// const arr3= [...arr,...arr2,...arr4];
// console.log(arr3);


// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// names.sort();
// names.reverse();

// console.log(names);

// const a = ["101","90","80","32","91"];
// const arr = [10,"Rohit","Mohan",true];

// arr.sort();
// console.log(arr);

// const arr = [10,40,31,71,5,11];  // Elements treated as Character

// Ascending Order:-

// arr.sort((a,b)=> a-b);

// Descending Order:-

// arr.sort((a,b)=> b-a);

// -ve : First a then b
// +ve : First b then a

// console.log(arr);

// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

// const a = arr.flat(Infinity);  // Conerts in 1-D
// console.log(a);
// console.log(arr[3][2][1]);


// const a = [10,309,"Rohit",9.3, true];
// a.name = "Mohan";
// console.log(a);