import React from 'react';

import Reset from './reset';
import SEO from './seo';
import ThemeProvider from './theme';

export const Layout = ({ children }) => (
  <ThemeProvider>
    <SEO />
    <Reset />
    {children}
  </ThemeProvider>
);
