import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { menu } from './menu';
import { usersList } from './usersList';

const rootReducer = combineReducers({
  authentication,
  menu, usersList
});

export default rootReducer;