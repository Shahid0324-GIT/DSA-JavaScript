// // REVERSING A STRING BY CONVERTING IT INTO AN ARRAY

// function reverseString(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Please enter a string of characters which are letters";
//   }
//   const strArray = str.split("");
//   strArray.reverse();

//   return strArray.join("");
// }

// let myString = "Data Structures and Algorithms";

// console.log(reverseString(myString));

// Exercise: Merge Sorted Arrays

// let myArr1 = [40, 100, 1, 5, 25, 10];
// let myArr2 = [4, 6, 30, 78, 12, 0, 22, 12098];

// function sortArrays(arr1, arr2) {
//   let newArr = [...arr1, ...arr2];
//   newArr.sort(function (a, b) {
//     return a - b;
//   });
//   return newArr;
// }

// console.log(sortArrays(myArr1, myArr2));
// sortArrays(myArr1, myArr2);
// const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order:
// points.sort(function (a, b) {
//   return a - b;
// });
// console.log(points);

// console.log(typeof [1, 2, 3, 4]);
