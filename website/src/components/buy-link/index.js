import React from 'react';

import * as S from './styles';

const BuyLink = ({ color }) => (
  <S.Link
    href="https://www.casadocodigo.com.br/"
    target="_blank"
    rel="noreferrer noopener"
    color={color}
  >
    compre o livro
  </S.Link>
);

export default BuyLink;
