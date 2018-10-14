import { dashboardConstants } from '../constants';
import { dashboardService } from '../services';

export const dashboardActions = {
    getAll, 
    save,
};

function getAll(userId, is_static) {
    return dispatch => {
        dispatch(request());

        dashboardService.getAll(userId)
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
