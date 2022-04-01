function Ride_Function() {              //Ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {              //Ternary operation, example
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "You are not eligible":"You are eligible";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";

}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");     //Constructor function example, new and this keywords
function myFunction_2() {                                                   //function displaying results of constructor function
    document.getElementById("New_and_This").innerHTML = 
    "Emily drives a " + Emily.Vehicle_Year + Emily.Vehicle_Make + Emily.Vehicle_Model;
}

function count_Function() {                                                 //Nested function, example
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 15;
        function Plus_ten() { Starting_point += 10;}
        Plus_ten();
    return Starting_point;
    }
}

