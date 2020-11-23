import { render } from '@testing-library/react';

// Providers
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './providers/theme';
import Providers from './providers';

// Utils
export const AnyPage = () => <div data-testid="any page" />

// Renders
export const renderWithTheme = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });
export const renderWithRouter = (ui, options) => render(ui, { wrapper: BrowserRouter, ...options });
export const renderWithProviders = (ui, options) => render(ui, { wrapper: Providers, ...options });
