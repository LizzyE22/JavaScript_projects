function my_dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Black",
        Breed:"Bombay",
        Age:11,
        Sound:"Meow",
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Color;

}