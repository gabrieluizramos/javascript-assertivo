import React from 'react';

import Reset from '../styles/reset';
import ThemeProvider from './theme';

const Providers = ({ children }) => (
  <ThemeProvider>
    <Reset />
    {children}
  </ThemeProvider>
);

export default Providers;
