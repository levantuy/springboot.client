import { dashboardConstants } from '../constants';

const initialState = { 
  loading: true, 
  dashboards: [],  
  error: undefined,    
};

export function dashboardList(state = initialState, action) {
  switch (action.type) {
    case dashboardConstants.GETALL_REQUEST:
      return {
        loading: true,
        dashboards: action.dashboards
      };
    case dashboardConstants.GETALL_SUCCESS:
      return {
        loading: false,
        dashboards: action.dashboards,        
      };
    case dashboardConstants.GETALL_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
}