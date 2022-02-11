import db from '../firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import getFavoriteMovies from './getFavoriteMovies';

const removeMovieFromFavorite = async (movieId, userId) => {
  try {
    const favoriteMovies = await getFavoriteMovies();
    await setDoc(doc(db, 'usersFavoriteMovies', userId), {
      movies: favoriteMovies.filter((movie) => movie.id !== movieId),
    });
  } catch (error) {}
};

export default removeMovieFromFavorite;
