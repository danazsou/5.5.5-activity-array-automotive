/*Bonus Work

PROPERTIES
Name                      Initial Value



autoLock                       2
autoHeadlights               true
airbagDeploy                   19

METHOD

 NAME         PARAMETERS          LOGIC


lockDoors           2                if door closed more than 2 minutes then autoLock emgages == true         

displayON          none              if sensor detects lowlight , autoHeadlights will turn on == true

airbagDeploy     speed of impact     if impact is greater that 19mph, airbag will deploy == true

*/


class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year; 
        this.color = color; 
        this.mileage = mileage;
        this.autoLock = 2;
        this.autoHeadlights = true; 
        this.airbagDeploy = 19

    }
}