import { userConstants } from '../constants';

const initialState = { 
  loading: true, 
  userInfo: {},  
};

export function userForm(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETONE_REQUEST:
      return {
        loading: true,
        userInfo: action.userInfo
      };
    case userConstants.GETONE_SUCCESS:
      return {
        loading: false,
        userInfo: action.userInfo,        
      };
    case userConstants.GETONE_FAILURE:
      return {};
    default:
      return state
  }
}