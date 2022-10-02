//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class car extends vehicleModule{
    constructor(make, model, year, color, mileage) {
        super (make, model, year, color, mileage); 
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + "There is not enough space.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    
    start() {
        if (this.fuel > 0) {            
            console.log("Engine On.");
            return this.started = true
        } else {
            console.log("Fuel Empty. Time to refill.");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "red", "20000");
console.log(v.make)