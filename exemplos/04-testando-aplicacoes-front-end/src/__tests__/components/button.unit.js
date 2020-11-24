// Utilitários
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../testUtils';

// Componente
import Button from '../../components/button';

describe('<Button />', () => {
  it('Renderiza um botão corretamente', () => {
    renderWithTheme(<Button>conteudo</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it('Executa ações de click ao receber a função por prop', () => {
    const onClick = jest.fn();
    renderWithTheme(<Button onClick={onClick}>conteudo</Button>);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Pode renderizar um ícone', () => {
    const icon = <span>icone</span>;
    renderWithTheme(<Button icon={icon}>conteudo</Button>);

    const icone = screen.getByText('icone');
    expect(icone).toBeInTheDocument();
  });
});
