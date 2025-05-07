"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const stringes = ["cd", "Dc", "ee", "uu"];
const bools = [true, false, true, true, false];
// GenericType
const persone = [
    {
        name: "sujon",
        age: 27
    },
    {
        name: "sheikh",
        age: 28
    }
];
const manush = ["sujon", "sheikh"];
const userWithId = [1234, { name: "sujon", email: "iamsujon@gmail.com" }];
// Generic with function
const addStudentCourse = (student) => {
    const course = "Next level web dev";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addStudentCourse({
    name: "sujon",
    email: "iamsujon@gmail.com"
});
const student2 = addStudentCourse({
    name: "sheikh",
    email: "sheikh@gmail.com"
});
