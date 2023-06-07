import { styled } from 'styled-components';

export const Container = styled.tr`
  .img-container {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;

    > img {
      width: 220%;
      object-fit: contain;
    }
  }

  & > td {
    border: 1px solid #e5e5e5;
    padding: 15px 25px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  .product-identification {
    display: flex;
    align-items: center;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .actions button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }

  .actions button:hover {
    filter: opacity(0.8);
    transition: all 0.3s;
  }

  button small {
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
  }

  .edit {
    color: ${({ theme }) => theme.colors.primary};
  }

  .delete {
    color: ${({ theme }) => theme.colors.red};
  }

  .active {
    color: ${({ theme }) => theme.colors.green};
  }

  .inactive {
    color: ${({ theme }) => theme.colors.red};
  }
`;
