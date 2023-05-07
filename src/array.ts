const names: string[] = [];
names.push("Dylan");
names.push("sujon"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


const nam: readonly string[] = ["Dylan"];
nam.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
