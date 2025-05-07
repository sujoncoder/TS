"use strict";
class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    ;
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
    ;
}
const dog = new Animal("Don", 27, "khew khew");
dog.makeSound();
