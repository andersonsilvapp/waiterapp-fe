import { styled } from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(229, 229, 229, 1);
  width: 355px;
  box-shadow: 0px 10px 40px rgba(45, 45, 45, 0.1);

  & > header {
    padding: 30px;
    border-bottom: 1px solid rgba(229, 229, 229, 1);
    display: flex;
    justify-content: space-between;

    & > span {
      font-size: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    & > small {
      color: ${({ theme }) => theme.colors.grey[500]};
      font-weight: 600;
    }
  }

  & > footer {
    padding: 0 30px 30px;
    display: flex;
    justify-content: space-between;

    .button-container {
      width: 132px;
    }
  }
`;

export const OrderItems = styled.div`
  padding: 20px 30px 30px;

  > span {
    color: ${({ theme }) => theme.colors.grey[900]};
    font-size: 18px;
    font-weight: 500;
  }
`;
