import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../utils/api';

export function useAuth() {
  const [token, setToken] = useState('');

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setToken(token);
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function signIn(formData: { email: string; password: string }) {
    try {
      const {
        data: { token },
      } = await api.post('/auth/login', formData);

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      setAuthenticated(true);

      console.log(token);
    } catch (error: any) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  }

  function signOut() {
    setToken('');
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    //redireciona o user para a pag login

    setAuthenticated(true);
  }

  return { token, authenticated, loading, signIn, signOut };
}
