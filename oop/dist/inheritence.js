"use strict";
// COMMON
class Common {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    ;
    getSleep(getHours) {
        console.log(`The ${this.name} sleep ${getHours}`);
    }
}
;
// FOR STUDENT
class Student extends Common {
    constructor(name, age, address) {
        super(name, age, address);
    }
    ;
}
;
const sujon = new Student("Sujon", 27, "Magura");
sujon.getSleep(8);
// FOR STUDENT
class Teacher extends Common {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    ;
    takeClass(takeClass) {
        console.log(`The ${this.name} will take ${takeClass} class`);
    }
    ;
}
;
const apolo = new Teacher("Apolo", 50, "Magura", "Principle");
apolo.takeClass(4);
