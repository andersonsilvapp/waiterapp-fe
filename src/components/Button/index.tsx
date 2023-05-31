import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <Container {...props} >
      {children}
    </Container>
  );
}
