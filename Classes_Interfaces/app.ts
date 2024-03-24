import { Car } from "./car.class";
import { Dog } from "./dog.class";
import { Person } from "./person.interface";

//Class
let ferrari: Car = new Car('Ferrari','n33', 2025,200 );

console.log(ferrari.getCarInfo());
ferrari.drive(100);
console.log(ferrari.getCarInfo());

//Interface (Object)
let person: Person = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
};

console.log(person.greet());

//Interface (Class)
let dog: Dog = new Dog();
console.log(dog.makeSound()); // Saída: Woof!