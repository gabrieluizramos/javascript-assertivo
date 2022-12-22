import React from 'react';

import Section from '../../components/section';

import * as S from './styles';

const AboutSection = () => (
  <Section>
    <h3>Sobre o autor</h3>
    <S.Content>
      <S.Avatar>
        <img src="https://github.com/gabrieluizramos.png" alt="autor" />
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
          Gabriel Ramos é pintor de pixel (ou desenvolvedor, como algumas
          pessoas preferem chamar) e instrutor em projetos relacionados ao
          ensino da tecnologia.
        </p>
        <p>
          Já passou por empresas de diversos tamanhos e segmentos: de
          e-commerces e companhias mais consolidadas à startups unicórnios com
          produtos emergentes.
        </p>
        <p>
          Na grande maioria de suas experiências teve contato com os mais variados assuntos que envolvem o
          ecossistema JavaScript, desde aplicações front-end à ferramentas e
          back-end.
        </p>
      </S.About>
    </S.Content>
  </Section>
);

export default AboutSection;
