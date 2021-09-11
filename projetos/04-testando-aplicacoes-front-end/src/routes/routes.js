import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

export const paths = {
  home: '/',
  dashboard: '/dashboard'
};

const routes = [
  {
    page: Dashboard,
    path: paths.dashboard,
    authenticated: true
  },
  {
    page: Login,
    path: paths.home
  }
];

export default routes;
