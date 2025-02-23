function addMovie(movies, movieTitle, movieYear) {
  newMovie = {
    id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1,
    title: movieTitle,
    releaseYear: movieYear,
    watched: false,
  };

  movies.push(newMovie);
}

function markWatched(movies, movieId) {
  movies.forEach((movie) => {
    if (movie.id === movieId) {
      movie.watched = true;
    }
  });
}

function removeWatched(movies) {
  return movies.filter((movie) => !movie.watched);
}

function sortMoviesByYear(movies) {
  return movies.sort((a, b) => b.releaseYear - a.releaseYear);
}

let movies = [
  { id: 1, title: "Inception", releaseYear: 2010, watched: false },
  { id: 2, title: "The Matrix", releaseYear: 1999, watched: false },
];

addMovie(movies, "Interstellar", 2014);
markWatched(movies, 1);
movies = removeWatched(movies);
movies = sortMoviesByYear(movies);

console.log(movies);
