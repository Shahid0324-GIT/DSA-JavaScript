// const nemo = new Array(50).fill("Nemo");

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "Nemo") {
//       console.log("Found Nemo!!!");
//     }
//   }
//   let t1 = performance.now();
//   console.log(`Above function ran for ${t1 - t0} miliseconds`);
// }

// // O(1) for space complexity since only one variable is created in the for loop whic is i = 0;

// findNemo(nemo);
// console.log("Done!!");

// // Big-O notations for 'For' loops is === O(n), means the no. of operations
// // Depends on the no. of elements provided

// function printingFirst(array) {
//   console.log(array[0]);
// }

// printingFirst(nemo);

// // O(1) / O(log n): No matter how big the array or inputs provided
// // The output remains constant  that means same no. of operations
// // printingFirst() is an example for O(1) operation vs Elements

// function printingTow(array) {
//   console.log(array[0]);
//   console.log(array[0]);
// }

// printingTwo(nemo);

// // O(2) is also constant time operation which prints only two o/p's

// // Exercis::

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//     // O(n)
//     anotherFunction(); // O(n) depends on the loops
//     let stranger = true; // O(n) --same--
//     a++; // O(n)
//   }
//   return a; // O(1)
// }

// // Solution: 1 + 1 + n + n + n + n + 1 = 3 + 4n

// // Exercise::

// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// // Big-O = 4 + 7n

// const boxes = [1, 2, 3, 4, 5];
// pairs = [];

// function logAllpairsOfArray(array) {
//   pairs = [];
//   for (i = 0; i < boxes.length; i++) {
//     for (j = 0; j < boxes.length; j++) {
//       newPair = [boxes[i], boxes[j]];
//       pairs.push(newPair);
//     }
//   }
// }

// logAllpairsOfArray(boxes);
// console.log(pairs);

// Big - O for two nested loops like for the above example is O(n^2) - Quadratic Time
// The line on the operations vs elements will be steep
// Interviw questions will be based on this mostly and ask you to convert
// it into O(n log n) problem
// Anything happens within the same indentation will be added while,
// Anything nested will be multiplied
// Having more nested loops is not ideal and increases time complexity

// Space Complexity depends on:
// Variables, Data Structures, Function Calls, Allocations

// function hiArrayFn(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = i;
//   }
//   console.log(hiArray);
// }

// hiArrayFn(6);

// Here in the above function the space complexity is O(n) since a new array
// is getting created for every iteration.
// The variable i = 0 is only created once so the space complexity will
// be O(1) but compared to O(n) it is getting dropped
// Speed vs Space is always the concern and depends whic we want to prefer
// the most

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

// Solution: BASIC:

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(array1, array2));

// Solution: GOOD:
// Loop through first array and create an object where props === items in array

// function containsCommonItem1(arr1, arr2) {
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }

//   // Loop through second array and check the availability in map object
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem1(array1, array2));

// Solution: EXPERT:
// const result = array1.some((item) => array2.includes(item));
// console.log(result);

// Google Sample Problem

// Naive

// function hasPairWithSum(arr, sum) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     for (var j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === sum) return true;
//     }
//   }

//   return false;
// }

// // Better
// function hasPairWithSum2(arr, sum) {
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));

// Reference Type:
//In JS every object that created points to different
// location in the memory and any variables that reference the object
// points only to that object

// Example: [] === [] ----> Output: False
//Since, each array created will be new and will point to differebt location in the memory

// Example:
// let a = { value: 10 };
// let b = a;
// let c = { value: 10 };
// console.log(a === b); // Output: true
// console.log(a === c); // Output: false

// constext vs scope:
// context tells us where we are within the object
// console.log(this === window); // true
// this.alert("Window") same as window.alert("Window");;
// function a() {
//     console.log(this) Output: window{}
// }
// const object4 = {
//   a: function () {
//     console.log(this);
//   },
// };
// object4.a(); Output: {a: ƒ}

// INSTATNTIATION:
// class Player {
//   constructor(name, type) {
//     console.log(this);
//     this.name = name;
//     this.type = type;
//   }

//   introduce() {
//     console.log(`Hi, my name is ${this.name}, I'm a ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }

//   play() {
//     console.log(`I'm a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Shahid", "Arc-Wizard");
// const wizard2 = new Wizard("Shauna", "Healer");
// wizard1.play();
// wizard1.introduce();
// wizard2.play();
// wizard2.introduce();
