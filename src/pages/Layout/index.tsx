import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../components/Sidebar';

import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
}
