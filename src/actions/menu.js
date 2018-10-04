import { menuConstants } from '../constants';
import { menuService } from '../services';

export const menuActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        menuService.getAll()
            .then(
                menus => dispatch(success(menus)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: menuConstants.MENU_REQUEST } }
    function success(menus) { 
        const dashboard = {
            name: 'Dashboard',
                  url: '/dashboard',            
                  icon: 'icon-speedometer',
                  badge: {
                    variant: 'info',
                    text: 'NEW',
                  },
          };
          menus.unshift(dashboard);
        return { type: menuConstants.MENU_SUCCESS, menus } 
    }
    function failure(error) { return { type: menuConstants.MENU_FAILURE, error } }
}