import React from 'react';

import ThemeProvider from './theme';
import ReduxProvider from './redux';
import NotificationProvider from './notification';

const Providers = ({ children }) => (
  <ReduxProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
  </ReduxProvider>
);

export default Providers;
