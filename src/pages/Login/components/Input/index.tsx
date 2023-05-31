import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

import emailIcon from '../../../../assets/images/Mail.svg';
import passwordIcon from '../../../../assets/images/Lock.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: 'email' | 'password';
}

export function Input({ icon, ...props }: InputProps) {
  const inputIcon = icon === 'password' ? passwordIcon : emailIcon;

  return (
    <Container>
      <i style={{ backgroundImage: `url(${inputIcon})` }} />
      <input type="text" {...props} />
    </Container>
  );
}
