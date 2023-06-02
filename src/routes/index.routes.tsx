import { Route, Routes as NavigationRoutes } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

import { PrivateRoute } from './private.routes';

import { TableOrders } from '../pages/TableOrders';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Loading } from '../components/Loading';
import { Layout } from '../pages/Layout';

export function Routes() {
  const { loading } = useAuthContext();

  return (
    <>
      <Loading isLoading={loading} overlay />
      <NavigationRoutes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/orders" element={<TableOrders />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </NavigationRoutes>
    </>
  );
}
