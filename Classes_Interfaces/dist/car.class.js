"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, year, mileage) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    Car.prototype.getCarInfo = function () {
        return "Car: ".concat(this.brand, " ").concat(this.model, ", Year: ").concat(this.year, ", Mileage: ").concat(this.mileage, " km");
    };
    Car.prototype.drive = function (distance) {
        this.mileage += distance;
    };
    return Car;
}());
exports.Car = Car;
