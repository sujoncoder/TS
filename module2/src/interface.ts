{
    // Type alias
    type User = {
        name: string;
        age: number;
    };

    // Interface
    interface User1 {
        name: string;
        age: number;
    };


    const person: User1 = {
        name: "sujon",
        age: 27
    };




    // extend using type alias
    type UserWithRole = User & { role: string };


    const person2: UserWithRole = {
        name: "sujon",
        age: 27,
        role: "Developer"
    };


    // extend using interface
    interface UserWithRole2 extends User1 {
        role: string
    }

    const person3: UserWithRole2 = {
        name: "sujon",
        age: 27,
        role: "Hacker"
    };



    // array with interface
    interface roll3 {
        [index: number]: number
    }

    const myRoll: roll3 = [1, 2, 3, 4, 5];


    // interface with function

    //example with type
    type Add1 = (num1: number, num2: number) => number;

    //example with interface
    interface Add2 {
        (num1: number, num2: number): number
    };


    // function
    const AddFunction: Add2 = (num1, num2) => num1 * num2;

}