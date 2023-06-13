import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 40px 40px 0px;
  margin-bottom: 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 28px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey[900]};
    margin-bottom: 25px;
  }

  .search {
    width: 410px;
    display: flex;

    ::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grey[500]};
    }

    > input {
      width: 350px;
      background: transparent;
      border: 1px solid #e5e5e5;
      padding: 10px 25px;
      border-radius: 50px;
      outline: none;
    }

    > button {
      width: 45px;
      height: 45px;
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 22.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;

      &:hover {
        filter: opacity(0.8);
        transition: all 0.3s;
      }
    }
  }

  .button-container {
    small {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
