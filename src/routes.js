import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './layouts/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./containers/UserTablePage'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/users', exact: true,  name: 'Users', component: Users },  
];

export default routes;
