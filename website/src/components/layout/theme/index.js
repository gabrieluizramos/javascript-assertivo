import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './config';

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Provider;
