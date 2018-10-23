import { dashboardConstants } from '../constants';
import { dashboardService } from '../services';

export const dashboardActions = {
    getAll, 
    save,
    getDictionaries,
    add,
};

function getAll(is_static) {
    return dispatch => {
        dispatch(request());

        dashboardService.getAll()
            .then(
                dashboards => dispatch(success(dashboards, is_static)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: dashboardConstants.GETALL_REQUEST } }
    function success(response, is_static) {
        var dashboards = [];
        response.forEach(element => {
            var item = {
                id: element.id,
                userId: element.userId,
                i: element.i,
                x: element.x,
                y: element.y,
                w: element.w,
                h: element.h,
                static: is_static
            }
            dashboards.push(item);
        });         
        return { type: dashboardConstants.GETALL_SUCCESS, dashboards } 
    }
    function failure(error) { return { type: dashboardConstants.GETALL_FAILURE, error } }
}

function save(dashboards) {
    return dispatch => {
        dispatch(request());

        dashboardService.save(dashboards)
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: dashboardConstants.SAVE_REQUEST } }
    function success(response) {         
        return { type: dashboardConstants.SAVE_SUCCESS, response } 
    }
    function failure(error) { return { type: dashboardConstants.SAVE_FAILURE, error } }
}

function add(dashboard) {
    return dispatch => {
        dispatch(request());

        dashboardService.add(dashboard)
            .then(
                response => {
                    dispatch(getDictionaries());
                    dispatch(getAll(false));
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: dashboardConstants.SAVE_REQUEST } }
    function success(response) {         
        return { type: dashboardConstants.SAVE_SUCCESS, response } 
    }
    function failure(error) { return { type: dashboardConstants.SAVE_FAILURE, error } }
}

function getDictionaries() {
    return dispatch => {
        dispatch(request());

        dashboardService.getDictionaries()
            .then(
                dashboards => dispatch(success(dashboards)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: dashboardConstants.GETDICTIONARIES_REQUEST } }
    function success(dashboards) {        
        return { type: dashboardConstants.GETDICTIONARIES_SUCCESS, dashboards } 
    }
    function failure(error) { return { type: dashboardConstants.GETDICTIONARIES_FAILURE, error } }
}
