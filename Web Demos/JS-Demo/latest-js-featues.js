//  let keyword allows declaring variables in the block scope.

// var x = 10;
// {
//   let x = 20;
//   console.log(x); //20
// }
// console.log(x); //10

// const keyword is similiar to let but the value cannot be changed.

// var y = 15;
// {
//   const y = 30;
//   // const y = 34; //will show compilation error.
//   console.log(y);
// }
// console.log(y);

//  arrow functions;
// const add = (x, y) => x + y; //adding two numbers.
// console.log(add(3, 4));

// object destructuring
// const person = {
//   firstName: "Prashant",
//   lastName: "Singh",
//   rollNo: 9641,
//   age: 21,
// };
// const { firstName, lastName } = person;
// console.log(firstName, lastName);

// array destructuring
// const fruits = ["banana", "apple", "orange", "mango"];
// const [fruit1, fruti2] = fruits;
// console.log(fruit1, fruti2);

// spread operator
// const class1 = ["p1", "p2", "p3"];
// const class2 = ["p4", "p5", "p6"];
// const class3 = ["p7", "p8", "p9", "p10"];
// const classes = [...class1, ...class2, ...class3];
// console.log(classes);

// const numbers = [12, 23234, 54, 654, 245, 26, 456, 3, 4345];
// console.log(Math.max(...numbers));

// for/of loop
// for (let x of class1) {
//   console.log("class is: " + x);
// }
// var p = "Prashant";
// for (let _ of p) {
//   console.log("Character: " + _);
// }

// maps in js
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// fruits.set("apples", 332);
// console.log("fruits has oranges: " + fruits.has("oranges"));
// fruits.forEach((value, key) => {
//   console.log({ value, key });
// });
// fruits.clear();

//  sets in js
// var names = new Set();
// names.add("Nikhil");
// names.add("Miral");
// names.add("Mahesh");

// console.log(names);

// js Classes.
// class Employee {
//   x = 20; //static variable for all the employees;

//   // constructor for the employees.
//   constructor(empno, name) {
//     this.empno = empno;
//     this.name = name;
//   }

//   // toString method for all the employees.
//   info() {
//     console.log({ x: this.x, empno: this.empno, name: this.name });
//   }
// }

// var emp = new Employee(1001, "Prashant");
// emp.info();

// Promises in javascript.
// const myPromise = new Promise((res, rej) => {
//   console.log("Promise created!");
//   setTimeout(res, 1000);
// });

// myPromise.then(
//   () => console.log("Resolved!"),
//   () => {}
// );

// default parameter values:
// const sub = (x = 0, y = 0) => {
//   console.log(x - y);
// };
// sub();

// rest parameters:
// function printNames(...names) {
//   var text = "";
//   for (let name of names) {
//     text += name+" ";
//   }
//   console.log(text);
// }

// printNames("Prashant", "Mark", "Ali", "Sania");

// new array methods
// entries();
// const arr = ["Prashant", "Mark", "Ali", "Sania"];
// const f = arr.entries(); // returns an array iterator.
// for (let entry of f) console.log(entry);

// keys()
// for (let key of arr.keys()) console.log(key);
// for (let value of arr.values()) console.log(value);

// find();
// console.log(arr.find((name) => name.length > 5));

// findIndex();
// console.log(arr.findIndex((name) => name.length > 5));


//MATH methods

//trunc();
// console.log(Math.trunc(4.99));
// console.log(Math.trunc(4.1));
// console.log(Math.trunc(4.0));
// console.log(Math.trunc(-14.0));
// console.log(Math.trunc(null));
// console.log(Math.trunc(undefined));


// others
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

