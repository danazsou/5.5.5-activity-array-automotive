const VehicleModule = require('./vehicle').Vehicle

class car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage );
      
        this.autoLock = true;
        this.doorclosed = 2
        this.autoHeadlights = true;
        this.lowLightDetection = true;
        this.speed = 20
        this.airbagDeploy = true ;
    }

    lockDoors(num){
        if (this.doorClosed > 2) {
            this.autolock = true 
            return this.autoLock;
            //autolock function engages
        }
    }

   autoHeadlights(){
    if(this.lowLightDetection = true ) {
        return this.autoHeadlights
    }
   }

   speedDetection(num){
    if(this.speed > 19) {
        if()
    }
   }
}




const VehicleModule = require("./vehicleBaseClass")

