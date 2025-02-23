"use strict";

// alert("Hello world! (External)");

// dynamic variable
let message = "Hello world!";

// constant variable
const myBirthday = "08.01.2004";

// uppercase constants - hard-coded values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let myName = "Jerem";
let myAge = 21;
// backticks - string
// alert(`My name is ${myName} and I'm ${myAge} years old.`);

// let age = prompt("How old are you?", 20);
// alert(`Your age is ${age}`);

// let isBoss = confirm("Are you the boss?");
// alert(isBoss);

// let name = prompt("What's the official name of javascript?", "");
// name == ECMAScript ? alert("Right!") : alert("You don't know! ECMAScript");

// let userName = prompt("Who's there?", "");

// if (userName === "Admin") {
//   let pass = prompt("Password?", "");

//   if (pass === "TheMaster") {
//     alert("Welcome!");
//   } else if (pass === "" || pass === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else if (userName === "" || userName === null) {
//   alert("Canceled");
// } else {
//   alert("I don't know you");
// }

// // nullish coalescing operator
// result = a ?? b;
// // result = (a !== null && a !== undefined) ? a : b;

// // labels -> break out from nested loops
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert("Done!");

// while (true) {
//   let num = prompt("Enter a number:", "");

//   if (num > 100) {
//     alert("Welcome!");
//     break;
//   } else if (num == null || num == " ") {
//     break;
//   }
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }

// ctrl+k , q

// let word = "Vanakkam";

// console.log(word);

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.");
// );

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n <= 0) {
//   alert(
//     `Power ${n} is not supported,
//     please enter an integer number greater than zero`
//   );
// } else {
//   alert(pow(x, n));
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let prop in salaries) {
//   sum += salaries[prop];
// }

// console.log(sum);

// function multiplyNumeric(obj) {
//   for (let prop in obj) {
//     if (typeof obj[prop] == "number") {
//       obj[prop] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);
// console.log(menu);

let arr1 = [100, 90, 85, 95, 80];
let N = 3;

arr1.sort((a, b) => b - a);
console.log(arr1.slice(0, N));
