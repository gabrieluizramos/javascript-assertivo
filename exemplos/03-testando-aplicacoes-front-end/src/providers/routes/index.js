import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { BaseRoute, PrivateRoute } from './route';
import routes from './routes';

const Routes = () => (
  <Router>
    <Switch>
      {routes.map(({
        path,
        page: Page,
        auth = false,
        Route = auth ? PrivateRoute : BaseRoute
      }) => (
        <Route path={path} key={`route-${path}`}>
          <Page />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default Routes;
