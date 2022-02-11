import db from '../firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import getFavoriteMovies from './getFavoriteMovies';

const addMovieToFavorite = async (movieData, userId) => {
  try {
    const favoriteMovies = await getFavoriteMovies();

    await setDoc(doc(db, 'usersFavoriteMovies', userId), {
      movies: [movieData, ...favoriteMovies],
    });
  } catch (error) {
    console.log(error);
  }
};

export default addMovieToFavorite;
