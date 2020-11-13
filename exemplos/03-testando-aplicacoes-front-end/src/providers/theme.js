import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Provider;
