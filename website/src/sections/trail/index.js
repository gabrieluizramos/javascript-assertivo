import React from 'react';

import Section from '../../components/section';

import * as S from './styles';

const TrailSection = () => (
  <Section>
    <S.Content>
      <h3>Jornada</h3>
      <S.TrailList>
        <S.TrailItem>
          <S.TrailContent>
            <S.TrailTitle>Fundamentos</S.TrailTitle>
            <S.TrailDescription>
              Começamos nossa jornada pelos fundamentos e pelas teorias de
              testes. Antes de qualquer código é necessário saber como as
              ferramentas e funcionam e como começar a nos acostumar com uma
              cultura de testes.
            </S.TrailDescription>
          </S.TrailContent>
        </S.TrailItem>
        <S.TrailItem>
          <S.TrailContent>
            <S.TrailTitle>CLI</S.TrailTitle>
            <S.TrailDescription>
              Após visitar os fundamentos necessários, vamos entender os projeto
              que será abordado e aplicar testes unitários de forma prática nas
              diversas camadas de uma ferramenta de linha de comando (CLI)
            </S.TrailDescription>
          </S.TrailContent>
        </S.TrailItem>
        <S.TrailItem>
          <S.TrailContent>
            <S.TrailTitle>Back-end</S.TrailTitle>
            <S.TrailDescription>
              Depois de algum contato com as ferramentas, é hora de aplicar
              diversos testes em uma API feita em Node com Express. Aplicaremos
              testes unitários, de integração e também testes de carga.
            </S.TrailDescription>
          </S.TrailContent>
        </S.TrailItem>
        <S.TrailItem>
          <S.TrailContent>
            <S.TrailTitle>Front-end</S.TrailTitle>
            <S.TrailDescription>
              Testar componentes visuais pode ser uma tarefa árdua. Nessa etapa,
              vamos aplicar testes unitários, de integração e regressão visual
              nos componentes e nas páginas de nossa aplicação.
            </S.TrailDescription>
          </S.TrailContent>
        </S.TrailItem>
        <S.TrailItem>
          <S.TrailContent>
            <S.TrailTitle>End-to-End</S.TrailTitle>
            <S.TrailDescription>
              Para finalizar, vamos aplicar testes E2E para que possamos testar
              a aplicação de ponta-a-ponta e garantir que nossos principais
              fluxos estão funcionando ao simular uma pessoa real interagindo
              com nosso software.
            </S.TrailDescription>
          </S.TrailContent>
        </S.TrailItem>
      </S.TrailList>
    </S.Content>
  </Section>
);

export default TrailSection;
