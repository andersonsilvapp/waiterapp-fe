import { Link } from 'react-router-dom';

import { Icon } from '../Icon';
import { Container } from './styles';
import { IconsType } from '../../assets/images/icons';

interface MenuButtonProps {
  type: IconsType;
  to: string;
  isActive: boolean;
}

export function MenuButton({ type, to, isActive }: MenuButtonProps) {
  return (
    <Container isActive={isActive}>
      <Link to={to}>
        <Icon type={type} />
      </Link>
    </Container>
  );
}
