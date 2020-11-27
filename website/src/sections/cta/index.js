import React from 'react';

import Section from '../../components/section';
import BuyLink from '../../components/buy-link';

import * as S from './styles';

const CTA = ({ light, color }) => (
  <Section light={light}>
    <S.CTA>
      <BuyLink color={color} />
    </S.CTA>
  </Section>
);

export default CTA;
