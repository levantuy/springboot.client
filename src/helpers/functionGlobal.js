import { userService } from '../services';
import { userConstants } from '../constants';
import React from 'react';

export const functionGlobal = {
    handleResponse,    
    logout, tableOptions,
    checkboxFormatter,
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

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
    </span>
);

function tableOptions(page, sizePerPage, totalSize) {
    return {
        page: page,
        sizePerPage: sizePerPage,
        totalSize: totalSize,
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: '10', value: 10
        }, {
            text: '20', value: 20
        }, {
            text: '50', value: 50
        }, {
            text: '100', value: 100
        }, {
            text: 'All', value: totalSize
        }] // A numeric array is also available. the purpose of above example is custom the text
    }
}

// show column type checkbox
function checkboxFormatter(cell, row) {
    return (
        <input type="checkbox" defaultChecked={cell}></input>
    );
}