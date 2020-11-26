import React from 'react';

import * as S from './styles';

const Section = ({ children, light }) => (
  <S.Section light={light}>
    <S.Wrapper>
      {children}
    </S.Wrapper>
  </S.Section>
);

export default Section;
