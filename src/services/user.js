import { myConfig as config } from '../helpers/config';
import { authHeader, functionGlobal } from '../helpers';

export const userService = {
    login,
    logout,
    getAll,
    getOne,
    deleteUser,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail: username, password: password })
    };

    return fetch(`${config.apiUrl}auth/signin`, requestOptions)
        .then(functionGlobal.handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll(pageIndex, pageSize) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}users?page=${pageIndex}&size=${pageSize}`, requestOptions).then(functionGlobal.handleResponse);
}

function getOne(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}users/byid/${id}`, requestOptions).then(functionGlobal.handleResponse);
}

function deleteUser(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}users/deleteCustom/${id}`, requestOptions).then(functionGlobal.handleResponse);
}