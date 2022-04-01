function Call_Loop() {          //function utilizing a while loop
    var Digit = "";
    var y = 10;
    while (y < 21) {
        Digit += "<br>" + y;
        y++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Property() {        //length property example
    let text = "Today is Friyay!";
    let length = text.length;
    document.getElementById("length").innerHTML = length;
}

var Wines = ["Pinot Noir", "Chardonnay", "Pinot Gris", "Gamay"];          //function utilizing a for loop
var Content = "";
var x;
function for_Loop() {
    for (x = 0; x < Wines.length; x++) {
        Content += Wines[x] + "<br>";
    }
    document.getElementById("Wines_of_Oregon").innerHTML = Content;
}

function array_Function() {         //array function example
    var plant_photo = [];
    plant_photo[0] = "pothos";
    plant_photo[1] = "snake";
    plant_photo[2] = "cactus";
    plant_photo[3] = "philodendron";
    document.getElementById("Array").innerHTML = "This here is a " + plant_photo[1] + " plant.";
}

function constant_function() {      //constant keyword example
    const Wine = {type: "Pinot Noir", producer: "Cristom", color: "red"};
    Wine.price = "$65";
    Wine.type = "Chardonnay";
    Wine.size = "magnum";
    document.getElementById("Constant").innerHTML = "This " + Wine.type + " is on sale for " + Wine.price;
    document.getElementById("Constant").innerHTML = "This " + Wine.type + " is a special " + Wine.size + " size bottle.";
}

function my_Function() {            //let keyword example
let x = 65;
    document.getElementById("example").innerHTML = x;
}

document.getElementById("return").innerHTML = return_Function();

function return_Function() {
    return "Good morning everyone";
}

let wine = {                    //object using the let keyword
    variety: "Pinot Noir ",
    year: "2019 ",
    style: "light bodied ",
    color: "red ",
    vineyard: "Temperance Hill Vineyard",
    description : function () {
        return "This wine is a " + this.year + this.variety + " from " + this.vineyard + ".";
    }
};
document.getElementById("Oregon_wine").innerHTML = wine.description();

let text = "";                          //loop with a break statement
for (let x = 4; x < 10; x++) {
    if (x === 8) { break; }
    text += "The number is " + x + "<br>";
}
document.getElementById("break").innerHTML = text;

let text_1 = "";
for (let i = 4; i < 10; i++) {          //loop with a continue statement
    if (i === 8) { continue; }
    text_1 += "The number is " + i + "<br>";
}
document.getElementById("continue_loop").innerHTML = text_1;

