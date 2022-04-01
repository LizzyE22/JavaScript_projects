function displayType(movie) {
    var movieType = movie.getAttribute("data-movie-type");
    alert("The film " + movieType + " was filmed in " + movie.innerHTML);
}