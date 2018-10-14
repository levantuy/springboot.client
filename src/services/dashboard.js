import { myConfig as config } from '../helpers/config';
import { authHeader, functionGlobal } from '../helpers';

export const dashboardService = {    
    getAll,
    save,
    getDictionaries,
    add,
};

function getAll(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}userdashboard?userid=${userId}`, requestOptions).then(functionGlobal.handleResponse);
}

function getDictionaries() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}dashboards`, requestOptions).then(functionGlobal.handleResponse);
}

function save(dashboards) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(dashboards)
    };

    return fetch(`${config.apiUrl}userdashboard`, requestOptions).then(functionGlobal.handleResponse);
}

function add(dashboard) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(dashboard)
    };

    return fetch(`${config.apiUrl}userdashboard/add`, requestOptions).then(functionGlobal.handleResponse);
}