import { tmdbHost } from './hosts';

export const getPopularMovies = async () => {
  const { data } = await tmdbHost.get('movie/popular');
  return data.results;
};

export const getCurrentMovie = async (movieId) => {
  const { data } = await tmdbHost.get(`movie/${movieId}`);
  return data;
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdbHost.get('movie/upcoming');
  return data.results;
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdbHost.get('movie/top_rated');
  return data.results;
};
