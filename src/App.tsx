import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { Routes } from './routes';
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  );
}
