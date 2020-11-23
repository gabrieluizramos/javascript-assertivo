import { screen } from '@testing-library/react';
import { renderWithRouter, AnyPage } from '../../testUtils';

import { Redirect } from 'react-router-dom';
import { paths } from '../../routes/routes';
import { PrivateRoute } from '../../routes/route';

import { useAuthentication } from '../../store/user/selectors';
jest.mock('../../store/user/selectors.js');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Redirect: jest.fn(),
}));


beforeEach(() => {
  Redirect.mockReturnValue(<div data-testid="redirected" />);
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Deve redirecionar para a home caso usuário não esteja autenticado', () => {
  useAuthentication.mockReturnValueOnce({ authenticated: false });

  renderWithRouter(
    <PrivateRoute path="/">
      <AnyPage />
    </PrivateRoute>
  );

  expect(Redirect).toHaveBeenCalledTimes(1);
  expect(Redirect).toHaveBeenCalledWith({ to: { pathname: paths.home } }, {});
  expect(screen.getByTestId('redirected')).toBeInTheDocument();
});

it('Deve permitir acesso à uma rota privada caso usuário esteja autenticado', () => {
  useAuthentication.mockReturnValueOnce({ authenticated: true });

  renderWithRouter(
    <PrivateRoute path="/">
      <AnyPage />
    </PrivateRoute>
  );

  expect(Redirect).not.toHaveBeenCalled();
  expect(screen.queryByTestId('redirected')).not.toBeInTheDocument();
  expect(screen.getByTestId('any page')).toBeInTheDocument();
});
