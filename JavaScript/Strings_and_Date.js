// String:-

// const str1 = "Aman Mishra";
// const str2 = 'Aman Pandit';
// const day = 18;
// const str3 = `Aman is coming on ${day}`;

// console.log(str3);

// const str = `Hello Aman Pandit`;

// console.log(str.length)
// console.log(str[1]);

// str[2] = "S";  // Can't be Changed
// console.log(str)

// Upper_and_Lower_Case:-

// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(a);
// console.log(b);

// const str = `Hello Aman Pandit`;

// console.log(str.indexOf('an')); // Index of First Occurence 
// console.log(str.lastIndexOf('an'));  // Index of Last Occurence
// console.log(str.includes('an'));

// Slice:-

// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2));

// const str = `Hello Aman Mishra`;

// console.log(str.substring(2,5));

// const a = "Aman";
// const b = "Mishra";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Aman");
// console.log(24+"Aman"+10);
// console.log(24+30+"Aman");

// const str = `Hello Aman Mishra`;

// console.log(str.replaceAll("man",'iam'));

// const user = "  Aman Mishra ";
// console.log(user.trim());  // Remove spaces from starting and end.

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))  // Split based on spaces
// console.log(names.split(",")). // Split based on commas

// Date_And_Time:-

// const now = new Date();

// console.log(now); // Universal Time
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// Local Time:-

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());


// Days: Mon-Sunday(1-Based Indexing)
// Months: January-December(0-Based Indexing)

// const now = new Date(2025,8,20,8,25,16,125);
// Year Month Date Hour Minute Second MilliSecond

// console.log(now.toString());

// TimeStamp:-

// const now = Date.now();  // Current Time in MilliSecond
// const dates = new Date(1771088543386);
// console.log(dates.toString());
// console.log(dates);
// console.log(now);