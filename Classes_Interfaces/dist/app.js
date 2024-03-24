"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_class_1 = require("./car.class");
var dog_class_1 = require("./dog.class");
//Class
var ferrari = new car_class_1.Car('Ferrari', 'n33', 2025, 200);
console.log(ferrari.getCarInfo());
ferrari.drive(100);
console.log(ferrari.getCarInfo());
//Interface (Object)
var person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old.");
    }
};
console.log(person.greet());
//Interface (Class)
var dog = new dog_class_1.Dog();
console.log(dog.makeSound()); // Saída: Woof!
