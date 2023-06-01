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

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey[500]};
    cursor: not-allowed;
  }

  &:hover {
    filter: opacity(0.8);
    transition: all 0.3s;
  }
`;
