import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 20px;
  }

  .order-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;

    span {
      color: ${({ theme }) => theme.colors.grey[900]};
      font-weight: 600;
      margin-bottom: 6px;
    }

    small {
      color: ${({ theme }) => theme.colors.grey[900]};
      font-weight: 600;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.grey[900]};
    font-weight: 600;
    font-size: 18px;
  }

  .img-container {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: red;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 220%;
      object-fit: contain;
    }
  }
`;
