const checkIsMovieFavorite = (favoriteMovies, movieId) => {
  let exists = false;

  favoriteMovies.forEach((movie) => {
    if (movie.id === movieId) {
      exists = true;
    }
  });

  return exists;
};

export default checkIsMovieFavorite;
