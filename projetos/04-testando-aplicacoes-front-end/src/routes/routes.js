import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

export const paths = {
  home: '/',
  dashboard: '/dashboard'
};

export default [
  {
    page: Dashboard,
    path: paths.dashboard,
    auth: true
  },
  {
    page: Login,
    path: paths.home
  }
];

