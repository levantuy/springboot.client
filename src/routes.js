import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './layouts/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./containers/DashboardPage'),
  loading: Loading,
});

const DashboardEdit = Loadable({
  loader: () => import('./containers/DashboardPageEdit'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./containers/UserTablePage'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./containers/UserFormPage'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/users', exact: true,  name: 'Users', component: Users },  
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/dashboardEdit', exact: true,  name: 'Dashboard edit', component: DashboardEdit },
];

export default routes;
