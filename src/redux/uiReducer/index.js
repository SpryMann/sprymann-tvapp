import {
  CHANGE_SHOW_MESSAGE,
  CHANGE_SHOW_SIDEBAR,
  initialState,
  UPDATE_IS_LOADING,
  CHANGE_MESSAGE,
  CHANGE_SHOW_MOVIE_VIDEOS,
} from './consts';

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOW_SIDEBAR:
      return { ...state, showSidebar: action.payload };
    case UPDATE_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case CHANGE_SHOW_MESSAGE:
      return { ...state, showMessage: action.payload };
    case CHANGE_MESSAGE:
      return { ...state, message: action.payload };
    case CHANGE_SHOW_MOVIE_VIDEOS:
      return { ...state, showMovieVideos: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
