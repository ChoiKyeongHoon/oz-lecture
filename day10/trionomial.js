let score = 90;
// let grade = score >= 90 ? "A+" : "A";
let grade = score <= 89 ? "A+" : "A";
console.log(grade);

let math = 80;
let english = 90;
let avarage = 85;

let isLowMath = math < avarage;
console.log(isLowMath);

let isLowEng = english < avarage;
console.log(isLowEng);

let avgMathGrade = isLowMath
  ? "Math score is less than avg"
  : "Math score is more than avg";

console.log(isLowMath && isLowEng);
console.log(isLowMath || isLowEng);
console.log(avgMathGrade);
