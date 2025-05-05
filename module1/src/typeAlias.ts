{
    // Object type alias

    type User = {
        name: string,
        age: number,
        isMarried: boolean
    };


    const person: User = {
        name: "sujon",
        age: 27,
        isMarried: false
    };


    // String, number, boolean data type alias
    type MyNameType = string;
    const name: MyNameType = "sujon"



    // Function type
    type FunctionType = (one: number, two: number) => number


    const hello: FunctionType = (one, two) => one * two;

}