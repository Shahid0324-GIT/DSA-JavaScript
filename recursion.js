// ex:

// let counter = 0;
// function rec() {
//   console.log(counter);
//   if (counter > 3) {
//     return "done!";
//   }
//   counter++;
//   return rec();
// }

// console.log(rec());

// let num = 5;

// function fact(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * fact(num - 1);
// }

// console.log(fact(num));

// function findFact(num) {
//   let facto = 1;
//   for (let i = 2; i <= num; i++) {
//     facto = facto * i;
//   }
//   return facto;
// }

// console.log(findFact(num));
const num = 8;

function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(num));
