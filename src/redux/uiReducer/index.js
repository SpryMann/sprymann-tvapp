import { CHANGE_SHOW_SIDEBAR, initialState } from './consts';

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOW_SIDEBAR:
      return { ...state, showSidebar: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
