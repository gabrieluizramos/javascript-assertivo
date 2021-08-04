// Utilitários
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../testUtils';

// Componente
import Input from '../../components/input';

describe('<Input />', () => {
  it('Renderiza um campo de texto que pode ser preenchido', () => {
    renderWithTheme(<Input type="text" placeholder="campo de texto" />);

    const input = screen.getByPlaceholderText('campo de texto');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'texto digitado pelo usuário');
    expect(input).toHaveValue('texto digitado pelo usuário');
  });

  it('Renderiza um campo de senha que pode ficar visível', () => {
    renderWithTheme(<Input type="password" placeholder="campo de senha" />);

    const input = screen.getByPlaceholderText('campo de senha');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'senha super secreta');
    expect(input).toHaveValue('senha super secreta');
    expect(input).toHaveAttribute('type', 'password');

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('Renderiza um campo select com opções selecionáveis', () => {
    const options = [
      { text: 'Administrador', value: 'ADMIN' },
      { text: 'Usuário', value: 'USER' },
    ];
    renderWithTheme(<Input type="select" options={options} placeholder="selecione" />);

    const select = screen.getByPlaceholderText('selecione');
    expect(select).toBeInTheDocument();

    userEvent.selectOptions(select, screen.getByText('Usuário'));
    expect(select).toHaveValue('USER');
  });
});
