import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../testUtils';

import Form from '../../components/form';

import schema from '../../mocks/schema';
import { profile } from '../../mocks/profile';

describe('<Form />', () => {
  it('Renderiza um formulário com os campos necessários', () => {
    renderWithTheme(<Form schema={schema} />);

    const nome = screen.getByPlaceholderText(schema.fields[0].placeholder);
    const email = screen.getByPlaceholderText(schema.fields[1].placeholder);
    const enviar = screen.getByRole('button');

    expect(nome).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(enviar).toBeInTheDocument();
  });

  it('Realiza as validações corretamente e não dispara o submit até os dados estarem corretos', async () => {
    const onSubmit = jest.fn();
    renderWithTheme(<Form schema={schema} onSubmit={onSubmit} />);

    const nome = screen.getByPlaceholderText(schema.fields[0].placeholder);
    const email = screen.getByPlaceholderText(schema.fields[1].placeholder);
    const enviar = screen.getByRole('button');

    // clica sem preencher nnada
    userEvent.click(enviar);

    // verifica que onSubmit não foi disparado
    expect(onSubmit).not.toHaveBeenCalled();

    // verifica se as mensagens de erro apareceram
    expect(screen.getAllByText('Este campo precisa ser preenchido').length).toEqual(2);

    // digita dados corretamente
    userEvent.type(nome, profile.name);
    userEvent.type(email, profile.email);

    // verifica que as mensagens de erro sumiram e os valores estão preenchidos
    expect(screen.queryAllByText('Este campo precisa ser preenchido').length).toEqual(0);
    expect(nome).toHaveValue(profile.name);
    expect(email).toHaveValue(profile.email);

    // clica novamente em enviar
    userEvent.click(enviar);

    // agora submit deve ter sido chamado
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
