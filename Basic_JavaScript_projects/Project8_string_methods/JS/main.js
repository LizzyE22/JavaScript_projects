function poem() {                   //concat method example
    var part_1 = "For the birds ";
    var part_2 = "who own nothing- ";
    var part_3 = "the reason they can fly";
    var whole_poem = part_1.concat(part_2, part_3);
    document.getElementById("concat_method").innerHTML = whole_poem;
}

function slice_method() {           //slice method example
    var sentence = "For the birds who own nothing- the reason they can fly.";
    var section = sentence.slice(31, 42);
    document.getElementById("slice").innerHTML = section;
}

function upper_case_function() {        //uppercase method example
    let text = "This turned into upper case";
    let result = text.toUpperCase();
    document.getElementById("upper_case").innerHTML = result;
}

function search_function() {            //search method example
    let text = "I'm taking a walk in the park";
    let position = text.search("walk");
    document.getElementById("search").innerHTML = position;
}

function string_function() {            //string number method example
    var x = 365;
    document.getElementById("string").innerHTML = x.toString();    
}

function precision_function() {         //toPrecision() number method example
    var a = 12.2653;
    document.getElementById("Precision").innerHTML = a.toPrecision(3);
}

function fixed_function() {             //toFixed() method example
    var y = 3.6578;
    document.getElementById("Fixed").innerHTML = y.toFixed(3);
}

function value_of_function() {          //valueOf() method example
    var b = 49;
    document.getElementById("Value").innerHTML = b.valueOf();
}