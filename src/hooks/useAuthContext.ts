import { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
