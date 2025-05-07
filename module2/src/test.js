"use strict";
// TASK ONE
const test = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(test);
const showUserDetails = (name, age, role) => {
    const user = `Name: ${name}, Age: ${age}, Role: ${role !== null && role !== void 0 ? role : 'not specified'}`;
    console.log(user);
};
showUserDetails("sujon", 27, "user");
