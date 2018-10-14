import { dashboardConstants } from '../constants';

const initialState = { 
  loading: true, 
  dashboards: [],  
  error: undefined,    
};

export function dashboardDictionary(state = initialState, action) {
  switch (action.type) {
    case dashboardConstants.GETDICTIONARIES_REQUEST:
      return {
        loading: true,
        dashboards: action.dashboards
      };
    case dashboardConstants.GETDICTIONARIES_SUCCESS:
      return {
        loading: false,
        dashboards: action.dashboards,        
      };
    case dashboardConstants.GETDICTIONARIES_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
}