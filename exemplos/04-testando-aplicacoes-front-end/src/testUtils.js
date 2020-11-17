import { render } from '@testing-library/react';

// Providers
import ThemeProvider from './providers/theme';

// Renders
export const renderWithTheme = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });
