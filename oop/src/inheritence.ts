// COMMON
class Common {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };

    getSleep(getHours: number) {
        console.log(`The ${this.name} sleep ${getHours}`)
    }
};


// FOR STUDENT

class Student extends Common {

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    };
};


const sujon = new Student("Sujon", 27, "Magura");
sujon.getSleep(8);




// FOR STUDENT
class Teacher extends Common {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    };

    takeClass(takeClass: number) {
        console.log(`The ${this.name} will take ${takeClass} class`)
    };
};

const apolo = new Teacher("Apolo", 50, "Magura", "Principle");
apolo.takeClass(4);