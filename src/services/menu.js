import { myConfig as config } from '../helpers/config';
import { authHeader, functionGlobal } from '../helpers';

export const menuService = {
    getAll
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}menus`, requestOptions).then(functionGlobal.handleResponse);
}

