let increment = 10;
console.log("inc1", increment);
increment++;
console.log("inc2", increment);
console.log("inc3", increment++);
console.log("inc4", increment);

let decrement = 10;
console.log("dec1", decrement);
decrement--;
console.log("dec2", decrement);
console.log("dec3", decrement--);
console.log("dec4", decrement);

let incFirst = 10;
console.log("incF1", incFirst);
++increment;
console.log("incF2", incFirst);
console.log("incF3", ++incFirst);
console.log("incF4", incFirst);

let decFirst = 10;
console.log("decF1", decFirst);
--decFirst;
console.log("decF2", decFirst);
console.log("decF3", --decFirst);
console.log("decF4", decFirst);

//단항 연산
let num1 = -10;
num1 = -num1;
console.log("-(-10)", num1);

let num2 = 10;
num2 = -num2;
console.log("-(10)", num2);

let num3 = 10;
-num3;
console.log(num3);
