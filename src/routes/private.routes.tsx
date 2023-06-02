import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

export function PrivateRoute() {
  const { authenticated } = useAuthContext();
  const location = useLocation();

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
