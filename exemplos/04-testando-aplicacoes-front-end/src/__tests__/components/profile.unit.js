// Utilitários
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../testUtils';

// Componente
import Profile from '../../components/profile';

// Mocks
import { profile } from '../../mocks/profile';

describe('<Profile />', () => {
  it('Deve renderizar um perfil com dados sobre o usuário sem ações clicáveis', () => {
    const props = {
      onClickEdit: jest.fn(),
      onClickDelete: jest.fn(),
      editable: false
    };
    renderWithTheme(<Profile {...profile} {...props} />);

    const email = screen.getByText(profile.email);
    const username = screen.getByText(profile.userName);
    const role = screen.getByText(profile.role);
    const [editButton, deleteButton] = screen.getAllByRole('button');

    expect(email).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(role).toBeInTheDocument();

    expect(editButton).toBeDisabled();
    expect(deleteButton).toBeDisabled();

    userEvent.click(editButton);
    userEvent.click(deleteButton);

    expect(props.onClickEdit).not.toHaveBeenCalled();
    expect(props.onClickDelete).not.toHaveBeenCalled();
  });

  it('Deve renderizar um perfil clicável e disparar as ações de editar/deletar', () => {
    const props = {
      onClickEdit: jest.fn(),
      onClickDelete: jest.fn(),
      editable: true
    };
    renderWithTheme(<Profile {...profile} {...props} />);

    const [editButton, deleteButton] = screen.getAllByRole('button');

    expect(editButton).not.toBeDisabled();
    expect(deleteButton).not.toBeDisabled();

    userEvent.click(editButton);
    userEvent.click(deleteButton);

    expect(props.onClickEdit).toHaveBeenCalledTimes(1);
    expect(props.onClickEdit).toHaveBeenCalledWith(profile.uid);
    expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    expect(props.onClickDelete).toHaveBeenCalledWith(profile.uid);
  });
});
