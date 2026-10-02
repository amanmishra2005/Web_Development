const logical = () => {
  let num = 5;
  if ((num = 10)) {
    // This is a logical error. It should be '==' or '===' for comparison, not '=' which is an assignment.
    console.log(num); // This will always log 10 because of the assignment above.
  } else {
    console.log("num is not equal to 10"); // This block will never execute due to the logical error in the if condition.
  }
};

module.exports = logical;

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length; i++) { // This will cause an off-by-one error. It should be 'i < arr.length'.
//   console.log(arr[i]); // This will log 'undefined' when i equals arr.length.
// }

// let num = "10";
// console.log(num + 5); // This will log '105' instead of 15 due to type coercion. It should be 'Number(num) + 5' to get the correct result.
