import { userService } from '../services';
import { userConstants } from '../constants';

export const functionGlobal = {
    handleResponse
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}