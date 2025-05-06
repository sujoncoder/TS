// Generic Type
type GenericType<T> = Array<T>;

const numbers: GenericType<number> = [1, 2, 3, 4, 5, 6];

const stringes: GenericType<string> = ["cd", "Dc", "ee", "uu"];

const bools: GenericType<boolean> = [true, false, true, true, false];



// GenericType
const persone: GenericType<{ name: string, age: number }> = [
    {
        name: "sujon",
        age: 27
    },
    {
        name: "sheikh",
        age: 28
    }
];


// Generic tuple
type GenericTuple<x, y> = [x, y];

const manush: GenericTuple<string, string> = ["sujon", "sheikh"];

const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: "sujon", email: "iamsujon@gmail.com" }]


// Generic with function
const addStudentCourse = <T>(student: T) => {
    const course = "Next level web dev";

    return {
        ...student,
        course
    }
};

const student1 = addStudentCourse({
    name: "sujon",
    email: "iamsujon@gmail.com"
});


const student2 = addStudentCourse({
    name: "sheikh",
    email: "sheikh@gmail.com"
});