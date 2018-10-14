import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { menu } from './menu';
import { usersList } from './usersList';
import { userForm } from './userForm';
import { dashboardList } from './dashboardList';

const rootReducer = combineReducers({
  authentication,
  menu, usersList,
  userForm, dashboardList
});

export default rootReducer;