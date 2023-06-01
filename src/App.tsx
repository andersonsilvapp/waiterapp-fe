import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { AuthProvider } from './Context/AuthContext';
import { Router } from './routes/index.routes';

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
        <ToastContainer position="bottom-center" />
      </ThemeProvider>
    </AuthProvider>
  );
}
