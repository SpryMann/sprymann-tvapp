import { tmdbHost } from './hosts';

export const getPopularMovies = async () => {
  try {
    const { data } = await tmdbHost.get('movie/popular');
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getCurrentMovie = async (movieId) => {
  try {
    const { data } = await tmdbHost.get(`movie/${movieId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const { data } = await tmdbHost.get('movie/upcoming');
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const { data } = await tmdbHost.get('movie/top_rated');
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (str) => {
  try {
    const { data } = await tmdbHost.get('search/movie', {
      params: {
        query: str,
      },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const { data } = await tmdbHost.get(`movie/${movieId}/videos`);
    return data.results;
  } catch (error) {
    throw error;
  }
};
