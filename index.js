// VARIABLES AND SCOPE

//variables and variable declaration

// let, const, var
//es6 ecmascript v6
let x = 5;
x = 8;

// let myNumbers =
console.log(x);

let myName = "My name is Shuaibu Aliyu";

console.log(myName);

let isBool = false;
console.log(!isBool);

const shuaibu = null;
console.log(shuaibu);

let ibrahim;

ibrahim = "Strong";
console.log(ibrahim);

console.log(9 % 4);

//objects..... properties and methods

let myObject = { name: "Shuaibu", age: 28, color: "red", hasGraduated: true };

let personObject = {
  name: "Shuaibu",
  age: 28,
  color: "brown",
  height: 1.6,
  isEducated: true,
  run() {
    console.log("I am running");
  },
  eat() {
    console.log("I am eating");
  },
};

// console.log(myObject["age"]);
// console.log(myObject.hasGraduated);
// console.log(myObject.color);

console.log(personObject.run());
//numbers
//strings
//boolean
//null
//undefined
// symbol
//object
//Bigint

// SCOPE

let z = 13; // global scope

function add() {
  let n = 2 + z;
  return n;
}

// write a function that add two numbers

function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}

console.log(addTwoNumbers(10, 5));

console.log(add());
