import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

import { PrivateRoute } from './private.routes';

import { TableOrders } from '../pages/TableOrders';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export function Router() {
  const { loading } = useAuthContext();

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/:id" element={<Home />} />
          <Route path="/orders" element={<TableOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
