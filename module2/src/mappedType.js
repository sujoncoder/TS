"use strict";
const arrOfNumbers = [1, 2, 3, 4, 5];
// Satically change
const newArray = arrOfNumbers.map((numbr) => console.log(numbr));
// Dynamically change
const newArray2 = arrOfNumbers.map((numbr) => numbr.toString());
console.log(newArray2);
