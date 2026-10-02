const runtime = () => {
  console.log(x); // ReferenceError: x is not defined
};

module.exports = runtime;

// let num = 10;
// num(); // TypeError: num is not a function

// let jsonString = "{name: 'John'}";
// JSON.parse(jsonString); // Invalid JSON string (Single quotes are not allowed in JSON), will throw a SyntaxError

// const fs = require("fs");
// fs.readFileSync('nonexistentfile.txt'); // Error: ENOENT: no such file or directory, open 'nonexistentfile.txt'
