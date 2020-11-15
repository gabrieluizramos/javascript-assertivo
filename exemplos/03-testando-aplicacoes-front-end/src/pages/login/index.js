// Default
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { login, checkAuthentication } from '../../store/user/actions';
import { useAuthentication } from '../../store/user/selectors';

// Router
import { Redirect } from 'react-router-dom';

// Components
import Card from '../../components/card';
import Form from '../../components/form';

// Schema
import schema from './schema';

// Styles
import * as S from './styles';

// Page
const LoginPage = () => {
  const user = useAuthentication();
  const dispatch = useDispatch();

  const onLogin = async ({ username, password }) => {
    dispatch(login(username, password));
  };

  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  if (user.authenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <S.Wrapper>
      <Card spacing="double">
        <S.Title>JavaScript Assertivo</S.Title>
        <S.Subtitle>
          Preencha suas informações para acessar a área logada
        </S.Subtitle>
        <S.Form>
          <Form schema={schema} onSubmit={onLogin} />
        </S.Form>
      </Card>
    </S.Wrapper>
  );
};

export default LoginPage;
