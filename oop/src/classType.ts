class Animal {


    constructor(public name: string, public age: number, public sound: string) { };

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    };
}

const dog = new Animal("Don", 27, "khew khew");
dog.makeSound();
