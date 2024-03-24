import { Animal } from "./animal.interface";

export class Dog implements Animal {
    makeSound(): string {
        return "Woof!";
    }
}