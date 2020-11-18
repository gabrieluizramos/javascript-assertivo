import { render } from '@testing-library/react';

// Providers
import ThemeProvider from './providers/theme';
import Providers from './providers';

// Renders
export const renderWithTheme = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });
export const renderWithProviders = (ui, options) => render(ui, { wrapper: Providers, ...options });
