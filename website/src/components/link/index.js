import React from 'react';

import * as S from './styles';

const Link = ({ href, color, children, disabled }) => (
  <S.Link
    target="_blank"
    rel="noreferrer noopener"
    href={!disabled && href}
    color={disabled ? 'disabled' : color}
  >
    {children}
  </S.Link>
);

export default Link;
