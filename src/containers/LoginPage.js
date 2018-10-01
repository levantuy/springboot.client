import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../views/Pages/Login/Login';
import { userActions } from '../actions';


const LoginPage = (props) => {
    if (props.loggedIn) {
        return (
            <Redirect push to="/" />
        )
    }

    return (
        <LoginForm {...props} />
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.authentication.loggedIn,

})

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(userActions.login(username, password));
        }, logout: () => {
            dispatch(userActions.logout());
        }
    }
}
var connected = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export  {connected as LoginPage };