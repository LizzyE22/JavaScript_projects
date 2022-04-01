function adding() {                 //This is the math addition function
    let a = 10 + 5;
    document.getElementById("Math").innerHTML = "10 + 5 = " + a;
}

function subtracting() {            //This is the math subtracting function
    let b = 20 - 10;
    document.getElementById("Math").innerHTML = "20 - 10 = " + b;
}

function multiplying() {            //This is the math multiplier function
    let c = 50 * 5;
    document.getElementById("Math").innerHTML = "50 * 5 = " + c;
}

function dividing() {               //This is the math divider function
    let d = 100 / 20;
    document.getElementById("Math").innerHTML = "100 / 20 = " + d;
}

function multiple_math() {          //This is the multiple math operation function
    let p = (5 + 10) * 2 / 3;
    document.getElementById("Math").innerHTML = "5 + 10 * 2 / 3 = " + p;
}

function modulus() {              //This is the modulus operator function  
    let q = 40 % 9;
    document.getElementById("Math").innerHTML = "the remainder is: " + q;
}

function negation_operator() {      //This is the negation operator function
    var x = 20;
    document.getElementById("Math").innerHTML ="output is " + -x;
}

var x = 10;                         //This is the increment operator
x++;
document.write(x);

var y = 20;                         //This is the decrement operator
x--;
document.write(y);

window.alert(Math.random()*100);     //This is the math random() funciton


document.getElementById("piDemo").innerHTML = Math.PI;      //This is the Math object method
