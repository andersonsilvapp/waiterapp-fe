import { styled } from 'styled-components';

interface ContainerStyle {
  isActive: boolean;
}

export const Container = styled.li<ContainerStyle>`
  display: flex;
  justify-content: center;
  padding: 20px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;
