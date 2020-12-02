import React from 'react';

import Reset from './reset';
import ThemeProvider from './theme';
import Footer from './footer';
export * from './seo';

const Layout = ({ children }) => (
  <ThemeProvider>
    <Reset />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
