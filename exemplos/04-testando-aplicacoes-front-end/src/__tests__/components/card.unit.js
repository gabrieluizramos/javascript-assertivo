// Utilitários
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../testUtils';

// Componente
import Card from '../../components/card';

describe('<Card />', () => {
  it('Renderiza uma div com um elemento qualquer', () => {
    renderWithTheme(<Card>conteudo</Card>);
    const conteudo = screen.getByText('conteudo');

    expect(conteudo).toBeInTheDocument();
  });
});
