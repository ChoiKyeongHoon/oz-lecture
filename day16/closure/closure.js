//global variable and local variable
// let globalVar = "I am a global variable";

// function myFunction() {
//   let localVar = "I am a local variable";
//   function innerFunction() {
//     console.log(globalVar); // Accessing global variable
//     console.log(localVar); // Accessing local variable
//     innerFunction();
//   }
// }
// innerFunction(); // This will throw an error because innerFunction is not defined in the global scope

// Closure example
// const x = 1;
// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }
// const innerFunction = outer();
// innerFunction(); // This will log 10 because innerFunction has access to the x variable in

// closer - counter status example
// const increase = (function () {
//   let num = 0;
//   return function () {
//     return ++num;
//   };
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());

const counter = (function () {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrese() {
      return --num;
    },
  };
})();
