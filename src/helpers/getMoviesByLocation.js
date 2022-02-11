import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../http/requests';
import getFavoriteMovies from './getFavoriteMovies';

const getMoviesByLocation = async (location) => {
  try {
    let data = [];

    switch (location) {
      case '/movies':
        data = await getPopularMovies();
        return data;
      case '/movies/new':
        data = await getUpcomingMovies();
        return data;
      case '/movies/toprated':
        data = await getTopRatedMovies();
        return data;
      case '/movies/favorite':
        data = await getFavoriteMovies();
        return data;
      default:
        return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMoviesByLocation;
