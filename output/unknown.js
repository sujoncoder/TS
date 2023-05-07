"use strict";
let myVar = "Hello, world!";
// This will result in a compilation error because the `toUpperCase` method is not guaranteed to exist on the `unknown` type
// myVar.toUpperCase();
// We must first check if the `toUpperCase` method exists on the `myVar` object before calling it
if (typeof myVar === "string") {
    console.log(myVar.toUpperCase()); // "HELLO, WORLD!"
}
else {
    console.log("Nothong");
}
