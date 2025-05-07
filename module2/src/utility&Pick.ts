// Utility and Pick


type Person = {
    name: string;
    age: number;
    address: string;
    email?: string;
};

// Pick
type PersonObj = Pick<Person, "name" | "age">


// Omit
type Contact = Omit<Person, "address" | "email">


// Required
type PersonRequire = Required<Person>



// Readonly
type PersonPartial = Partial<Person>



// Required
type ReadonlyPerson = Readonly<Person>

const anotherPerson: ReadonlyPerson = {
    name: "ss",
    age: 26,
    address: "magura",
    email: "iamsujon@gmail.com"
};

// anotherPerson.name = "sheikh"


// Record

// type PersonX = {
//     name: string,
//     age: number,
// };


type PersonX = Record<string, unknown>
const userX: PersonX = {
    name: "sujon",
    age: 27,
    isMarried: true,
};