import { styled } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 17px 0;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 40px;
`;
