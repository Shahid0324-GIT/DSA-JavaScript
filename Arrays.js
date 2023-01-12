// // STATIC ARRAYS: No of elements that can be stored beforehand and
// // only after that the array can be created (C, C++)

// // DYNAMIC ARRAYS: No of elemnts can be added anytime and the restriction
// // of fixed is not there (JS and Python)

// const strings = ["a", "b", "c", "d"];
// // Storage used: 4(blocks) * 4 elements = 16 bytes of storage in RAM
// strings.push("e"); // O(1) time complexity, Add any element at the end of an array

// strings.pop(); // O(1) time complexity, removes the last element

// strings.unshift("x"); // Add any element at the start of an array
// // Time complexity for unshift is O(n) since the element is added at the start and
// // remaining elements need to be shifted by 1

// strings.shift(); // Removes the first item of the array
// // Time complexity for shift is O(n) since the element is removed at the start and
// // remaining elements need to be shifted by 1

// strings.splice(2, 0, "new element"); // O(n/2) since we moved to half of the array

// strings[0]; // O(1) since only accessing of an eleemnt is done

// console.log(strings);
