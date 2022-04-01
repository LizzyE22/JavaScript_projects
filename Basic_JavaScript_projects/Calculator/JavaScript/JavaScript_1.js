function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " food is an excellent and delicious choice!";
    switch(Foods) {
        case "Mexican":
            Food_Output = "Mexican" + Food_String;
        break;
        case "Thai":
            Food_Output = "Thai" + Food_String;
        break;
        case "Indian":
            Food_Output = "Indian" + Food_String;
        break;
        case "Cuban":
            Food_Output = "Cuban" + Food_String;
        break;
        case "Ethiopian":
            Food_Output = "Ethiopian" + Food_String;
        break;
        case "Italian":
            Food_Output = "Italian" + Food_String;
        break;
        default:
        Food_Output = "Please enter your favorite type of food from the list above.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function class_name_function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has now changed";
}

var c = document.getElementById("my_Canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(145,100,95,0,2*Math.PI);
ctx.stroke();



var c = document.getElementById("my_Canvas_2");
var ctx = c.getContext("2d");
// Create Gradient //
var grd = 
ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"green");
grd.addColorStop(1,"white");
// Fill with gradient //
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);