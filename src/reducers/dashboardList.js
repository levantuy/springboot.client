import { dashboardConstants } from '../constants';

const initialState = { 
  loading: true, 
  dashboards: [],
  totalElements: 0, 
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
        totalElements: action.dashboards.totalElements, 
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