export class Car {
    constructor(private brand: string, private model: string, private year: number, private mileage: number) {}

    getCarInfo(): string {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}, Mileage: ${this.mileage} km`;
    }

    drive(distance: number): void {
        this.mileage += distance;
    }
}