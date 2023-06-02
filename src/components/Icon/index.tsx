import { icons, IconsType } from '../../assets/images/icons';

interface IconProps {
  type: IconsType;
}

export function Icon({ type }: IconProps) {
  return <img src={icons[type]} alt={`Icone ${type}`} />;
}
