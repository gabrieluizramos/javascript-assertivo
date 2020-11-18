import { Route as BaseRoute, Redirect } from 'react-router-dom';
import { useAuthentication } from '../store/user/selectors';

import { home } from './routes';

export const PrivateRoute = ({ children, ...props }) => {
  const { authenticated } = useAuthentication();
  const redirect = <Redirect to={{ pathname: home }} />

  return (
    <BaseRoute
      {...props}
      render={() => authenticated ? children : redirect}
    />
  );
};

export { BaseRoute };
