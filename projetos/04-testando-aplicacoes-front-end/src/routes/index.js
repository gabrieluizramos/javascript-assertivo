import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PubicRoute, PrivateRoute } from './route';
import routes from './routes';

const Routes = () => (
  <Router>
    <Switch>
      {routes.map(({
        path,
        page: Page,
        authenticated = false,
        Route = authenticated ? PrivateRoute : PubicRoute
      }) => (
        <Route path={path} key={`route-${path}`}>
          <Page />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default Routes;
