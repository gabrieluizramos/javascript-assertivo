// Utilitários
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../testUtils';

// Componente
import Carousel from '../../components/carousel';

// Mock do subcomponente de perfil
jest.mock('../../components/profile', () => () => <div data-testid="profile" />);

// Poderia ser feito como:
// jest.mock('../../components/profile', () => ({
//   __esModule: true,
//   default: () => <div data-testid="profile" />
// }));

// Mock de props base
const BASE_PROPS = {
  editable: true,
  onClickEdit: jest.fn(),
  onClickDelete: jest.fn()
};

describe('<Carousel />', () => {
  it('Deve renderizar uma lista de perfis', () => {
    const items = [
      { name: 'primeiro' },
      { name: 'segundo' },
      { name: 'terceiro' },
    ];
    renderWithTheme(<Carousel items={items} {...BASE_PROPS} />)
    const lista = screen.getByRole('list');
    const perfis = screen.getAllByTestId('profile');
    const itens = screen.getAllByRole('listitem');
    const botoes = screen.getAllByRole('button');

    expect(lista).toBeInTheDocument();
    expect(perfis.length).toEqual(3);
    expect(itens.length).toEqual(3);
    expect(botoes.length).toEqual(2);
  });
});
