let math = 80;
let english = 90;
let avarage = 85;

let isLowMath = math < avarage;
console.log(isLowMath);

let isLowEng = english < avarage;
console.log(isLowEng);

console.log(isLowMath && isLowEng);
console.log(isLowMath || isLowEng);
