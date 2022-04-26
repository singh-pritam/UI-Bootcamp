/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */
const input = ["Dirk", "Plato", "Gwen"];
const output = [
  {
    index: 0,
    name: "Dirk",
  },
  {
    index: 1,
    name: "Plato",
  },
  {
    index: 2,
    name: "Gwen",
  },
];

const convertToObjectArray = (input) =>
  input.map((ele, i) => ({ index: i, name: ele }));

console.log(convertToObjectArray(input));

/**
 * 2. Write a one liner function to calculate the total amount donated to a charity by all donors.
 * The data is presented in an array of objects:
 */
const donorsInfo = [
  {
    name: "Donor1",
    amount: 500,
  },
  {
    name: "Donor1",
    amount: 500,
  },
  {
    name: "Donor1",
    amount: 500,
  },
];

const totalAmount = donorsInfo.reduce((prev, curr) => prev + curr.amount, 0);
console.log(totalAmount);

/**
 * 3. Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
 */
const object = {
  firstName: "val",
  LastName: "val",
};
const outputLowerCase = ["firstname", "lastname"];

const lowercase = (object) =>
  Object.keys(object).map((element) => element.toLowerCase());

console.log(lowercase(object));

/**
 * 4. Write a JS Function to get the first and last index of the nth largest element in an array that satisfies a condition.
 * EG:
 * In an array of donors as below:
 */
const donorsInfo2 = [
  {
    name: "Donor1",
    amount: 1500,
  },
  {
    name: "Donor1",
    amount: 2500,
  },
  {
    name: "Donor1",
    amount: 5500,
  },
];

donorsInfo2.sort(function (a, b) {
  return a.amount - b.amount;
});

let set = new Set();

donorsInfo2.forEach(myFunction);
function myFunction(item, index) {
  set.add(item.amount);
}
set = Array.from(set);
let firstLargest = set[0];
var pos = donorsInfo2
  .map(function (e) {
    return e.amount;
  })
  .indexOf(firstLargest);

var lastPos = donorsInfo2
  .map(function (e) {
    return e.amount;
  })
  .lastIndexOf(firstLargest);
console.log(pos, lastPos);

/**
 * Consider only the donors who have donated more than 5000 and find the first index of the nth largest donor.
 */

/**
 * 5. Write a JavaScript function to find the largest level of nesting for arrays.
 * Assume that we do not have circular references.
 */
const myNestedArray = [[[1, 2, 3]], 4, 5, 6, [[[[[7, 8, [9, [10]]]]]]]];
// Answer: 8

const myNestedFunction = (arr) => {
  let count = 1;
  let ans = 0;
  arr.forEach((ele) => {
    if (ele instanceof Array) {
      //count++;
      count += myNestedFunction(ele);
      ans = Math.max(ans, count);
    } else {
      count = 0;
    }
  });

  return ans;
};

console.log(myNestedFunction(myNestedArray));

/**
 * 6. Write a JavaScript program to get the index of the function in an array of functions
 * which executed the fastest.
 * You cannot run a function more than once.
 */

/**
 * 7. Write a JS Function (2 liner??) to get the the nth largest element
 * in an array of objects based on a sort function. This index must be only among those
 * elements that satisfy a condition as provided by a callbackFn
 * Where the sortfunction, the `n` and the condition are params.
 * eg:
 */
const donorsInfo3 = [
  {
    name: "Donor1",
    amount: 1500,
  },
  {
    name: "Donor1",
    amount: 2500,
  },
  {
    name: "Donor1",
    amount: 5500,
  },
];
const getNthIndex = (n, sortFunction, conditionCallBack) => {
  conditionCallBack(elem);
  return arr[n];
};
