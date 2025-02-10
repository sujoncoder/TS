// tuples
const myArray: [number, string] = [2, "hh"];
myArray.push("dd")
console.log(myArray)


let tpl: readonly [string, number, boolean]; // tuple kepp mustbe readonly that do not operation
tpl = ["hello", 2, true]

// tuple destructuring
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;


// array readonly
let mew: readonly number[] = [1, 2, 3];
// mew.push(2)  // do not use any operation when write readonly


const numrs = [2, 3, 4];
let head: number = numrs[0]

// object - reference
const user: {
    readonly company: string,
    // company: "buddydevs",
    firstname: string,
    lastName?: string, // when use it ? thats mean is optional.
    age: number,
    isMarried: boolean
} = {
    company: "buddydevs",
    firstname: "sujon",
    // lastName: "sheikh",
    age: 25,
    isMarried: false
}

// user.company = "hhhhh"

// enum
enum hello {
    NotFound = 404, // by default when not value assign start with indexing number like 0
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

const res = hello.Success
console.log(res)


// number array mapping
const mArray: number[] = [1, 2, 3];
const newArray: number[] = mArray.map((el: number): number => el * el)


// type alias
type User = {
    name: string,
    hobby: string
};

const sujon: User = {
    name: "sujon",
    hobby: "gardening"
}

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;



// union type |
type Dev = "frontend" | "backend";
const developer: Dev = "backend"

// intersection type
type Frontend = {
    skils: string[],
    designation1: "Frontend dev"
}

type Backend = {
    skils: string[],
    designation2: "Backend dev"
}

type FullstackDev = Frontend & Backend;

const fullstackDev: FullstackDev = {
    skils: ["html", "css"],
    designation1: "Frontend dev",
    designation2: "Backend dev"
};

// type assertion
let emni: any;
(emni as number)


// type alias
// type alias any where like variable,array,oject etc.
type Car = {
    name: string,
    model: 121,
    isBuy: boolean
};

const car: Car = {
    name: "BMW",
    model: 121,
    isBuy: false
}

// interface
// interface only used for object
interface Bike {
    name: string,
    model: string,
    isOwn: boolean
}

interface Added extends Bike {
    color: string
}

const bike: Added = {
    name: "Royan enfield",
    model: "e23ed",
    isOwn: false,
    color: "yellow"
}

// Union |
const myFunc = (pera: number | string) => {
    console.log("my status is ", pera)
};
myFunc(2);
myFunc("2");

// function
const helo = (a: number, b: number, c?: number) => {
    return console.log(a + b || c)
}
helo(11, 22, 33)

// naming with functon
const namingFunc = ({ first, last }: { first: number, last: number }) => {
    console.log(first + last)
};
namingFunc({ first: 1, last: 2 })


// Rest Parameters
const now = (a: number, b: number, ...c: number[]) => {
    return a + b
};
now(1, 2, 3, 4, 5, 6,);


// csting or asertionSSS
let x = 'hello';
console.log(((x as unknown) as number).length);

// unknown, never
