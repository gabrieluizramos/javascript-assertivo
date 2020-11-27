import React from 'react';

import Reset from './reset';
import SEO from './seo';
import ThemeProvider from './theme';
import Footer from './footer';

export const Layout = ({ children }) => (
  <ThemeProvider>
    <SEO />
    <Reset />
    {children}
    <Footer />
  </ThemeProvider>
);
