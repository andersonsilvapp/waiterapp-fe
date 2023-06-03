import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 40px 40px 0px;

  & > h1 {
    font-size: 28px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey[900]};
    margin-bottom: 25px;
  }
`;
