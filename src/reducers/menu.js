import { menuConstants } from '../constants';

const initialState = { loading: true, menus: [] };

export function menu(state = initialState, action) {
  switch (action.type) {
    case menuConstants.MENU_REQUEST:
      return {
        loading: true,
        menus: action.menus
      };
    case menuConstants.MENU_SUCCESS:
      return {
        loading: false,
        menus: action.menus
      };
    case menuConstants.MENU_FAILURE:
      return {};
    default:
      return state
  }
}