// 🌟 JavaScript Complete Beginner to Advanced Guide
// -------------------------------------------------------------
// 📘 Introduction
// JavaScript is a programming language used to make websites interactive.
// It runs in the browser and can handle user actions, animations, and data.

// 🖨️ Output Methods
// // console.log() shows output in the browser console.
// console.log("Hello, JavaScript!");

// // alert() shows a popup message to the user.
// alert("Welcome to JavaScript!");

// // document.write() writes directly on the webpage.
// document.write("This is written using document.write()");

// -------------------------------------------------------------
// 🧱 VARIABLES
// Variables are containers that store values.
// var - old way (function-scoped)
// let - modern way (block-scoped)
// const - cannot be changed once assigned

var city = "Kolkata";
let name = "Suvradip";
const country = "India";

console.log(city, name, country);

// -------------------------------------------------------------
// 🔢 DATA TYPES
// Data types define what kind of data a variable can hold.
// String - text
// Number - integer or decimal
// Boolean - true or false
// Undefined - no value assigned
// Null - empty value
// Object - collection of key-value pairs
// Array - list of items

let myString = "Hello";
let myNumber = 25;
let isHappy = true;
let notDefined;
let emptyValue = null;
let person = { name: "Suvradip", age: 22 };
let fruits = ["apple", "banana", "mango"];

console.log(typeof myString, typeof myNumber, typeof isHappy);

// -------------------------------------------------------------
// ⚙️ OPERATORS
// Operators perform actions on values: arithmetic, comparison, logical

let a = 10;
let b = 5;

// Arithmetic
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder

// Comparison
console.log(a > b);  // greater than
console.log(a < b);  // less than
console.log(a == 10); // equal
console.log(a === "10"); // equal value and type

// Logical
console.log(a > b && b < 10); // AND
console.log(a > b || b > 10); // OR
console.log(!(a == b)); // NOT

// -------------------------------------------------------------
// 🧠 CONDITIONAL STATEMENTS
// Make decisions based on conditions

let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// -------------------------------------------------------------
// 🔁 LOOPS
// Repeat code multiple times

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// while loop
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

// do...while loop
let n = 1;
do {
    console.log("Do while:", n);
    n++;
} while (n <= 2);

// -------------------------------------------------------------
// 🧩 FUNCTIONS
// Functions are reusable blocks of code

function greet() {
    console.log("Hello, world!");
}
greet();

function add(x, y) {
    return x + y;
}
console.log(add(5, 3));

const multiply = (x, y) => x * y;
console.log(multiply(4, 2));

// -------------------------------------------------------------
// 🧺 ARRAYS
// Arrays store multiple values

let colors = ["red", "green", "blue"];
console.log(colors[0]); // red

colors.push("yellow"); // add
colors.pop(); // remove last
colors.forEach((color) => console.log(color));

// -------------------------------------------------------------
// 🧱 OBJECTS
// Objects store data in key-value pairs

let student = { name: "Suvradip", age: 22, course: "JavaScript" };
console.log(student.name);
console.log(student["age"]);

// -------------------------------------------------------------
// 🌍 DOM (Document Object Model)
// DOM lets JS change HTML and CSS

// document.getElementById("demo").innerHTML = "Changed text!";

// -------------------------------------------------------------
// 🖱️ EVENTS
// Actions like click, hover, input, etc.

// Example:
// <button onclick="sayHello()">Click Me</button>
// function sayHello(){ alert("Hello User!"); }

// -------------------------------------------------------------
// ⏳ PROMISES & ASYNC / AWAIT
// Promises handle async operations

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Promise completed!");
    else reject("Promise failed!");
});

myPromise.then(msg => console.log(msg)).catch(err => console.log(err));

// Async/Await
async function fetchData() {
    return "Data fetched!";
}
fetchData().then(console.log);

// -------------------------------------------------------------
// ⌨️ INPUT HANDLING
// Take input from the user

// let userName = prompt("Enter your name:");
// console.log("Welcome", userName);

// -------------------------------------------------------------
// 🏁 END OF GUIDE
// Practice each example to learn JavaScript faster
