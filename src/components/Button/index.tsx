import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: 'primary' | 'red' | 'green';
}

export function Button({ color, children, ...props }: ButtonProps) {
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  );
}
