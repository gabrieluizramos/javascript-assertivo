// Utilitários
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../testUtils';

// Página
import LoginPage from '../../pages/login';

// Mensagens de Snackbar
import { MESSAGES } from '../../store/notification/actions';

// Mocks
import { profile } from '../../mocks/profile';
import * as auth from '../../clients/http/authentication';
import { Redirect } from 'react-router-dom';
jest.mock('../../clients/http/authentication');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Redirect: jest.fn(),
}));

describe('<LoginPage />', () => {
  it('Renderiza corretamente', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.queryByText('JavaScript Assertivo')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('usuario')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('sua senha super secreta')).toBeInTheDocument();
  });

  it('Exibe mensagem de erro ao realizar login com dados inválidos', async () => {
    auth.logIn.mockRejectedValueOnce();

    renderWithProviders(<LoginPage />);

    userEvent.type(screen.getByPlaceholderText('usuario'), 'foo');
    userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), 'bar');
    userEvent.click(screen.getByText('Entrar'));

    expect(await screen.findByText(MESSAGES.AUTHENTICATE.ERROR)).toBeInTheDocument();
    expect(Redirect).not.toHaveBeenCalled();
  });

  it('Redireciona o usuário ao logar com sucesso', async () => {
    Redirect.mockReturnValueOnce(<div data-testid="redirected" />);
    auth.logIn.mockResolvedValueOnce(profile);

    renderWithProviders(<LoginPage />);

    userEvent.type(screen.getByPlaceholderText('usuario'), profile.userName);
    userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), 'NNQbaKNuU7qZl31');
    userEvent.click(screen.getByText('Entrar'));

    expect(await screen.findByTestId('redirected')).toBeInTheDocument();
  });
});
