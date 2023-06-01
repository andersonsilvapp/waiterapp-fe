import { ReactNode, createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  token: string;
  authenticated: boolean;
  signIn: (formData: { email: string; password: string }) => Promise<void>;
  loading: boolean;
  signOut: () => void;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const { token, authenticated, signIn, loading, signOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{ token, authenticated, signIn, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
