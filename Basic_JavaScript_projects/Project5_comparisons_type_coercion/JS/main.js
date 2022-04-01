document.write(typeof "Word");          //type of operator example
var x = 10 + '5';                   //expression combining string and a number
document.write(x);

function my_Function() {
    document.getElementById("example").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("example_2").innerHTML = isNaN('This is a string');
}

function my_Function3() {
    document.getElementById("example_3").innerHTML = isNaN('49');
}

document.write("<br>");

function my_Function4() {
    let x = 1.797693134862315E308;
    let y = x * 3E228;
    document.getElementById("example_4").innerHTML = y;
}

document.write("<br>");

function my_Function5() {
    let a = -1.797693134862315E308;
    let b = a * 3E228;
    document.getElementById("example_5").innerHTML = b;
}

document.write("<br>");

document.write(20>15);
document.write("<br>");
document.write(20<15);
document.write("<br>");

console.log(5+5);
console.log(10>11);

document.write("<br>");         //break
document.write(20==20);         //Double equal signs example, true
document.write("<br>");         //break
document.write(20==30);         //Double equal signs example, false
document.write("<br>");         //break
document.write("<br>");         //break

x = 5;                          //triple equal signs example, true
y = 5;
document.write(x===y);          //match data type and value
document.write("<br>");         //break

x = 10;                         //triple equal signs example, false
y = 12;
document.write(x===y);          //different data type and different value
document.write("<br>");         //break

a = 49;                         //triple equal signs example, false
b = "forty nine";
document.write(a===b);          //different data type, same value
document.write("<br>");         //break

a = 22;                         //triple equal signs example, false
A = 24;
document.write(a===A);          //same data type, different value
document.write("<br>");         //break

document.write("<br>");         //break
document.write(6>3 && 7>4);     //&& logical operator example, true
document.write("<br>");         //break
document.write(6>3 && 3>6);     //&& logical operator example, false
document.write("<br>");         //break
document.write(10 > 20 || 20 > 30);  //|| logical operator example, false
document.write("<br>");         //break


document.write("<br>");         //break
function not_Function() {       //not function, true
    let x = 20 > 30;
    document.getElementById("Not").innerHTML = !(x);
    document.write("<br>");         //break
}

function not_Function_2()  {     //not function, false
    let y = 10 > 5;
    document.getElementById("Not_2").innerHTML = !(y);
}


