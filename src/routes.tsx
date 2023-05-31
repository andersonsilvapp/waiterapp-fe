import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TableOrders } from './pages/TableOrders';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/orders',
    element: <TableOrders />
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
