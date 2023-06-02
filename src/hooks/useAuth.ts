import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../utils/api';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(storedToken)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function signIn(
    email: string,
    password: string,
    callback: VoidFunction
  ) {
    try {
      const {
        data: { token },
      } = await api.post('/auth/login', { email, password });

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);

      callback();

      console.log(token);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  function signOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;

    setAuthenticated(true);
  }

  return { authenticated, loading, signIn, signOut };
}
