"use strict";
{
    // Object Desturing
    const person = {
        name: "sujon",
        age: 27,
        email: "iamsujon@gmail.com",
        address: {
            city: "magura",
            post: "aksi",
            zipCode: 7600
        }
    };
    const { name, address: { city: location } } = person;
    // Array destructuring
    const myDostos = ["ss", "sk", "jj", "jk", "mk"];
    const [one, , , ...all] = myDostos;
}
