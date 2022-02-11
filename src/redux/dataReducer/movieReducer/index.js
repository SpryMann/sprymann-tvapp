import {
  CHANGE_CURRENT_MOVIE_ID,
  initialState,
  UPDATE_CURRENT_MOVIE,
  UPDATE_MOVIES,
} from './consts';

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MOVIES:
      return { ...state, movies: action.payload };
    case CHANGE_CURRENT_MOVIE_ID:
      return { ...state, currentMovieId: action.payload };
    case UPDATE_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
