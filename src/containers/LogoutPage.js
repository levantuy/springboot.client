import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userActions } from '../actions';
import Logout from '../views/Pages/Logout/Logout'

const LogoutPage = (props) => {
    if (!props.loggedIn) {
        return (
            <Redirect push to="/login" />
        )
    }

    return (
        <Logout {...props} />
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.authentication.loggedIn,
})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(userActions.logout());
        }
    }
}
var connected = connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
export { connected as LogoutPage };