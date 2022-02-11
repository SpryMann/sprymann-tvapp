import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

export default combineReducers({
  ui: uiReducer,
  data: dataReducer,
  user: userReducer
});
