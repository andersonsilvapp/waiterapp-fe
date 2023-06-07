import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  color?: 'primary' | 'red' | 'green';
  size?: 'small';
}

export function Button({ color, children, size, ...props }: ButtonProps) {
  return (
    <Container color={color} size={size} {...props}>
      {children}
    </Container>
  );
}
