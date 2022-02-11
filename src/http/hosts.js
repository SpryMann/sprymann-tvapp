import axios from 'axios';

export const tmdbHost = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'en-US',
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});
