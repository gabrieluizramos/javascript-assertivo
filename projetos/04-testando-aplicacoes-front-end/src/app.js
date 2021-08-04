import React from 'react';

import Providers from './providers';
import Routes from './routes';
import Reset from './styles/reset';

const App = () => (
  <Providers>
    <Reset />
    <Routes />
  </Providers>
);

export default App;
