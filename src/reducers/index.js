import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { menu } from './menu';
import { usersList } from './usersList';
import { userForm } from './userForm';
import { dashboardList } from './dashboardList';
import { dashboardDictionary } from './dashboardDictionary';

const rootReducer = combineReducers({
  authentication,
  menu, usersList,
  userForm, dashboardList,
  dashboardDictionary,
});

export default rootReducer;