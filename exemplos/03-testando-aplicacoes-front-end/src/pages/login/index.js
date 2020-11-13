import React from 'react';

import Card from '../../components/card';
import Form from '../../components/form';

import schema from './schema';
import * as S from './styles';

const LoginPage = () => (
  <Card spacing="double">
    <S.Title>JavaScript Assertivo</S.Title>
    <S.Subtitle>
      Preencha suas informações para acessar a área logada
    </S.Subtitle>
    <S.Form>
      <Form schema={schema} />
    </S.Form>
  </Card>
);

export default LoginPage;
