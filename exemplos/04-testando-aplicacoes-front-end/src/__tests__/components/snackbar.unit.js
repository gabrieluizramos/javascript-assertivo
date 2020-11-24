// Utilitários
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../testUtils';

// Componente
import Snackbar from '../../components/snackbar';

// Utilitário para esperar o tempo avançar
const waitTimersByTime = async time => {
  await waitFor(() => {
    jest.advanceTimersByTime(time);
  });
};

describe('<Snackbar />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Renderiza e remove o snackbar com delay', async () => {
    renderWithTheme(<Snackbar>mensagem</Snackbar>);
    const conteudo = screen.getByText('mensagem');

    // verifica que está na tela, mas ainda não está visível
    expect(conteudo).toBeInTheDocument();
    expect(conteudo).not.toBeVisible();

    // avança 500ms
    await waitTimersByTime(500);
    // verifica que agora está visível
    expect(conteudo).toBeVisible();

    // avança 5s
    await waitTimersByTime(5000);
    // verifica que não está visível novamente
    expect(conteudo).not.toBeVisible();

    // avança 500ms
    await waitTimersByTime(500);
    // verifica que foi removido do DOM
    expect(conteudo).not.toBeInTheDocument();
  });

  it('Remove o snackbar ao clicar no botão', async () => {
    renderWithTheme(<Snackbar>mensagem</Snackbar>);
    const botao = screen.getByRole('button');
    const mensagem = screen.queryByText('mensagem');

    expect(mensagem).toBeInTheDocument();

    userEvent.click(botao);
    await waitForElementToBeRemoved(() => screen.getByText('mensagem'));
  });
});
