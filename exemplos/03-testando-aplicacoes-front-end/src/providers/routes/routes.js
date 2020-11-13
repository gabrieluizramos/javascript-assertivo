import Login from '../../pages/login';
import Dashboard from '../../pages/dashboard';

export const home = '/';

export default [
  {
    path: '/dashboard',
    Page: Dashboard,
    auth: true
  },
  {
    path: home,
    Page: Login
  }
];

