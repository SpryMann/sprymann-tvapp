import { auth } from '../../fireabse-config';

export const initialState = {
  user: auth.currentUser || JSON.parse(localStorage.getItem('users')),
  userInfo: {
    name: '',
    nickname: '',
    imageUrl: '',
  },
  favoriteMovies: [],
};

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const UPDATE_FAVORITE_MOVIES = 'UPDATE_FAVORITE_MOVIES';
