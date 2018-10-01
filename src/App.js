import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './layouts';
// Pages
import { Page404, Page500, Register } from './views/Pages';
import LoginPage from './containers/LoginPage';
import LogoutPage from './views/Pages/Login/Login';
import { Provider } from 'react-redux'
import { PrivateRoute } from './helpers/PrivateRoute';
import { store } from './helpers';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/login"  name="Login Page" component={LoginPage} />
              <Route exact path="/logout" name="Logout Page" component={LogoutPage} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;