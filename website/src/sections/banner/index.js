import React from 'react';

import Section from '../../components/section';
import BuyLink from '../../components/buy-link';

import * as S from './styles';

const BannerSection = () => (
  <Section>
    <S.Content>
      <S.About>
        <S.Title>JavaScript Assertivo</S.Title>
        <S.Subtitle>Testando aplicações de ponta-a-ponta</S.Subtitle>
        <p>
          Chegou a hora de testar todas as camadas de uma aplicação JavaScript.{' '}
          <br />
          De uma simples ferramenta de linha de comando, à uma aplicação
          Back-end que expõe uma API e uma aplicação Front-end.
        </p>
        <BuyLink />
      </S.About>
      <S.Book>
        <S.Cover>
          <img src="https://avatars0.githubusercontent.com/u/13336905?s=460&u=2e6422672bb3f2aeaaa034e9605e953b5bbf49ca&v=4" alt="capa do livro" />
        </S.Cover>
      </S.Book>
    </S.Content>
  </Section>
);

export default BannerSection;
