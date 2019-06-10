// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => {console.log("Function was invoked!")};

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = function(param) {return param};

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (x , y) => {return x-y };
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);