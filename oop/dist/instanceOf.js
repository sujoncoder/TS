"use strict";
{
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        makeSound() {
            console.log(`The ${this.name} says ohohohhhhhh!`);
        }
        ;
    }
    const lion = new Animal("Don", 27);
    lion.makeSound();
    // DOG
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        ;
        makeBark() {
            console.log("I am barking...🐕");
        }
        ;
    }
    ;
    // CAT
    class Cat extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        ;
        makeMaew() {
            console.log("I am maewing...🐈");
        }
        ;
    }
    ;
    const dog = new Dog("Doggi", 2);
    const cat = new Cat("Catti", 5);
    // cat.makeMaew()
    // handle more smart way
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMaew();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimal(cat);
}
