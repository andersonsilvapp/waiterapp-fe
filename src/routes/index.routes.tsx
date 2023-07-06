import { Route, Routes as NavigationRoutes } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

import { PrivateRoute } from './private.routes';

import { TableOrders } from '../pages/TableOrders';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Loading } from '../components/Loading';
import { Layout } from '../pages/Layout';
import { Products } from '../pages/Products';
import { CreateProduct } from '../pages/CreateProduct';
import { EditProduct } from '../pages/EditProduct';

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
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </NavigationRoutes>
    </>
  );
}
