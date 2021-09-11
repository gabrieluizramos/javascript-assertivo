import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from '../store/user/selectors';

import { paths } from './routes';

export const PrivateRoute = ({ children, ...props }) => {
  const { authenticated } = useAuthentication();
  const render = () => authenticated ? children : <Redirect to={{ pathname: paths.home }} />

  return (
    <Route
      {...props}
      render={render}
    />
  );
};

export const PubicRoute = Route;
