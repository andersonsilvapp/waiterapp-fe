import { styled } from 'styled-components';

export type Colors = 'primary' | 'red' | 'green';
interface ButtonStyle {
  color?: Colors;
  size?: string;
}

export const Container = styled.button<ButtonStyle>`
  width: 100%;
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};
  border: none;
  padding: ${({ size }) => (!size ? '17px' : '12px')} 24px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 40px;

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey[500]};
    cursor: not-allowed;
  }

  &:hover {
    filter: opacity(0.8);
    transition: all 0.3s;
  }
`;
