import {
  initialState,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_FAVORITE_MOVIES,
  UPDATE_USER_INFO,
} from './consts';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER_INFO:
      return { ...state, userInfo: action.payload };
    case UPDATE_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    default:
      return state;
  }
};

export default userReducer;
