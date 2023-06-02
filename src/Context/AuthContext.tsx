import { ReactNode, createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  authenticated: boolean;
  signIn: (
    email: string,
    password: string,
    callback: VoidFunction
  ) => Promise<void>;
  loading: boolean;
  signOut: () => void;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, signIn, loading, signOut } = useAuth();

  return (
    <AuthContext.Provider value={{ authenticated, signIn, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
