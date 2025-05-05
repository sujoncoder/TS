"use strict";
{
    // Object Desturing
    var person = {
        name: "sujon",
        age: 27,
        email: "iamsujon@gmail.com",
        address: {
            city: "magura",
            post: "aksi",
            zipCode: 7600
        }
    };
    var name_1 = person.name, location_1 = person.address.city;
    // Array destructuring
    var myDostos = ["ss", "sk", "jj", "jk", "mk"];
    var one = myDostos[0], all = myDostos.slice(3);
}
