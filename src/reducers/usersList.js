import { userConstants } from '../constants';

const initialState = { 
  loading: true, 
  users: [],
  totalElements: 0, 
  error: undefined,    
};

export function usersList(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
        users: action.users
      };
    case userConstants.GETALL_SUCCESS:
      return {
        loading: false,
        users: action.users.content,
        totalElements: action.users.totalElements, 
      };
    case userConstants.GETALL_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
}