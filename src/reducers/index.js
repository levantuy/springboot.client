import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { menu } from './menu';

const rootReducer = combineReducers({
  authentication,
  menu
});

export default rootReducer;