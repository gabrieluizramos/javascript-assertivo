import Login from '../../pages/login';
import Dashboard from '../../pages/dashboard';

export const home = '/';

export default [
  {
    page: Dashboard,
    path: '/dashboard',
    auth: true
  },
  {
    page: Login,
    path: home
  }
];

