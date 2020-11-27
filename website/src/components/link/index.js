import React from 'react';

import * as S from './styles';

const BuyLink = ({ href, color, children }) => (
  <S.Link
    target="_blank"
    rel="noreferrer noopener"
    href={href}
    color={color}
  >
    {children}
  </S.Link>
);

export default BuyLink;
