import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const dataReducer = combineReducers({
  movie: movieReducer,
});

export default dataReducer;
