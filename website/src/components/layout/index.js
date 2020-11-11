import React from 'react';

import Reset from './reset';

export const Layout = ({ children }) => (
  <>
    <Reset />
    {children}
  </>
);
