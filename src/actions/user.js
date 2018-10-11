import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
    getAll, 
    getUser,
};

function getAll(index, size) {
    return dispatch => {
        dispatch(request());

        userService.getAll(index, size)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) {         
        return { type: userConstants.GETALL_SUCCESS, users } 
    }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUser(id) {
    return dispatch => {
        dispatch(request());

        userService.getUser(id)
            .then(
                userInfo => dispatch(success(userInfo)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETONE_REQUEST } }
    function success(userInfo) {         
        return { type: userConstants.GETONE_SUCCESS, userInfo } 
    }
    function failure(error) { return { type: userConstants.GETONE_FAILURE, error } }
}