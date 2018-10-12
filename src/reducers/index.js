import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { menu } from './menu';
import { usersList } from './usersList';
import { userForm } from './userForm';

const rootReducer = combineReducers({
  authentication,
  menu, usersList,
  userForm,
});

export default rootReducer;