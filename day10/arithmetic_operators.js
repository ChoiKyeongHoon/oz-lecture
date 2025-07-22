let num1 = 10;
let num2 = 20;

// console.log(num1);
// console.log(num2);

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;
let exponentiation = num1 ** 2;
console.log("덧셈:", sum);
console.log("뺄셈:", difference);
console.log("곱셈:", product);
console.log("나눗셈:", quotient);
console.log("나머지:", remainder);
console.log("제곱:", exponentiation);

let sumNum1Num2 = num1 + num2;
let subNum1Num2 = num1 - num2;
let subNum2Num1 = num2 - num1;
console.log("num1 + num2", sumNum1Num2);
console.log("num1 - num2", subNum1Num2);
console.log("num2 - num1", subNum2Num1);

let totalSum = sumNum1Num2 + subNum1Num2 + subNum2Num1;
console.log("sumNum1Num2 + subNum1Num2 + subNum2Num1", totalSum);
