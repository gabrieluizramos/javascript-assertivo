import React from 'react';

import Section from '../../components/section';

import * as S from './styles';

const AboutSection = ({ avatar }) => (
  <Section>
    <h3>Sobre o autor</h3>
    <S.Content>
      <S.Avatar>
        <img src={avatar} alt="autor" />
      </S.Avatar>
      <S.About>
        <S.Name>Gabriel Ramos</S.Name>
        <S.Username
          href="http://gabrieluizramos.com.br/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @gabrieluizramos
        </S.Username>
        <p>
          Gabriel Ramos é pintor de pixel (ou, desenvolvedor, como algumas
          pessoas preferem chamar), mentor na Laboratória e instrutor na Caelum.
        </p>
        <p>
          Já passou por empresas de diversos tamanhos e segmentos: de
          e-commerces e companhias mais consolidadas à startups unicórnios com
          produtos emergentes. Na grande maioria das experiências teve contato
          com tudo que envolve o ecossistema JavaScript, desde aplicações
          front-end à ferramentas e back-end em NodeJS.
        </p>
      </S.About>
    </S.Content>
  </Section>
);

export default AboutSection;
