import db from '../firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import getHistoryMovies from './getHistoryMovies';
import { getCurrentMovie } from '../http/requests';

const addMovieToHistory = async (movieId, userId) => {
  try {
    const movieData = await getCurrentMovie(movieId);
    const historyMovies = await getHistoryMovies();

    await setDoc(doc(db, 'usersHistoryMovies', userId), {
      movies: [
        movieData,
        ...historyMovies.filter((movie) => movie.id !== movieId),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export default addMovieToHistory;
