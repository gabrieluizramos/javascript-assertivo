// Utilitários
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../testUtils';

// Componente
import Avatar from '../../components/avatar';

// Mocks
import { profile } from '../../mocks/profile';

describe('<Avatar />', () => {
  it('Deve renderizar um ícone ao não possuir uma imagem', () => {
    renderWithTheme(<Avatar />);

    const figura = screen.getByRole('figure');
    const imagem = screen.queryByRole('img');

    expect(figura).toBeInTheDocument();
    expect(imagem).not.toBeInTheDocument();
    expect(figura).toMatchSnapshot();
  });

  it('Deve renderizar uma imagem quando disponível', () => {
    renderWithTheme(<Avatar src={profile.avatar} />);

    const figura = screen.getByRole('figure');
    const imagem = screen.queryByRole('img');

    expect(figura).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(figura).toMatchSnapshot();
  });
});
