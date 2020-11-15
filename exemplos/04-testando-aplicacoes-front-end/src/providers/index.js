import React from 'react';

import Reset from '../styles/reset';

import ThemeProvider from './theme';
import Routes from './routes';
import ReduxProvider from './redux';
import NotificationProvider from './notification';

const Providers = () => (
  <ReduxProvider>
      <ThemeProvider>
        <NotificationProvider>
          <Reset />
          <Routes />
        </NotificationProvider>
      </ThemeProvider>
  </ReduxProvider>
);

export default Providers;
