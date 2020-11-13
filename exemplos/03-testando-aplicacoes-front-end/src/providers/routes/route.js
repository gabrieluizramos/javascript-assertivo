import { Route as BaseRoute, Redirect } from 'react-router-dom';

import { home } from './routes';

export const PrivateRoute = ({ children, ...props }) => {
  const auth = false;
  const redirect = <Redirect to={{ pathname: home }} />

  return (
    <BaseRoute
      {...props}
      render={({ location }) =>
        auth ? children : redirect
      }
    />
  );
};

export { BaseRoute };
