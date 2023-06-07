import { styled } from 'styled-components';

export const Container = styled.table`
  width: 100%;
  margin-top: 30px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 10px 40px rgba(45, 45, 45, 0.1);
  border-collapse: collapse;

  & > thead > tr > th {
    padding: 25px 0;
    border: 1px solid #e5e5e5;
    color: ${({ theme }) => theme.colors.grey[500]};
  }
`;
