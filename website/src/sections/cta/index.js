import React from 'react';

import Section from '../../components/section';
import BuyLink from '../../components/buy-link';

import * as S from './styles';

const CTA = ({ color }) => (
  <Section>
    <S.CTA>
      <BuyLink color={color} />
    </S.CTA>
  </Section>
);

export default CTA;
