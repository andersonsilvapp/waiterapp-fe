import { useLocation } from 'react-router-dom';
import { MenuButton } from '../MenuButton';
import { Container } from './styles';

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <nav>
        <header>
          <MenuButton type="logo" isActive to="/main" />
        </header>
        <ul>
          <MenuButton type="home" isActive={pathname === '/main'} to="/main" />

          <MenuButton
            type="dashboard"
            isActive={pathname === '/dashboard'}
            to="/dashboard"
          />

          <MenuButton
            type="order"
            isActive={pathname === '/orders'}
            to="/orders"
          />

          <MenuButton
            type="product"
            isActive={pathname === '/products'}
            to="/products"
          />

          <MenuButton
            type="notification"
            isActive={pathname === '/notification'}
            to="/notification"
          />

          <MenuButton
            type="customer"
            isActive={pathname === '/customer'}
            to="/customer"
          />

          <MenuButton
            type="message"
            isActive={pathname === '/message'}
            to="/message"
          />

          <MenuButton
            type="setting"
            isActive={pathname === '/settings'}
            to="/settings"
          />
        </ul>
      </nav>
    </Container>
  );
}
