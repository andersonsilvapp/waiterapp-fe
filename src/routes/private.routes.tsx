import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

export function PrivateRoute() {
  const { authenticated } = useAuthContext();

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}
