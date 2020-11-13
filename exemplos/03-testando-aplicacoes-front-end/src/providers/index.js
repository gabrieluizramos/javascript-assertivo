import React from 'react';

import Reset from '../styles/reset';
import ThemeProvider from './theme';
import Routes from './routes';

const Providers = () => (
  <ThemeProvider>
    <Reset />
    <Routes />
  </ThemeProvider>
);

export default Providers;
