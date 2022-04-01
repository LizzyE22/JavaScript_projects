var x = 20;                         //Example of a global variable
function Add_numbers_1() {
    document.write(20 + x + "<br>");    
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");             //break

function Add_number_1() {           //Example of local variable
    var y = 50;
    document.write(10 + y + "<br>");
}
function Add_number_2() {
    document.write(y + 100);
    document.write("<br>");         //break
    console.log(50 + 100);          //console.log debug method

}
Add_number_1();
Add_number_2();

document.write("<br>");
function date() {                     //example of "if" statement
    if (new Date().getHours() < 22) {
    document.getElementById("intro").innerHTML = "How is your day going?";
    }
}

function if_statement() {           //example of "if" statement
if (5 < 10);
    document.getElementById("if_example").innerHTML = "The number on the left is less than the number on the right";
}

function legal_age() {              //example of "else" statement
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Purchase = "You are of legal age to purchase wine";
    
    }
    else {
        Purchase = "Unfortunately, you are not of legal age to purchase wine";
    }
    document.getElementById("tell_us_your_age").innerHTML = Purchase;
}

function Time_function() {          //time_function() outline
    var Time = new Date().getHours();   //example of "else if" statement
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
