import { styled } from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 60px;
  justify-content: center;
  align-items: center;

  .right-side {
    width: 100%;
    min-width: 340px;
    display: flex;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 45px;

    .title {
      > span {
        color: ${({ theme }) => theme.colors.grey[500]};
        font-size: 20px;
      }

      > h1 {
        color: ${({ theme }) => theme.colors.grey[900]};
        font-size: 40px;
        font-weight: 700;
        margin-top: 5px;
      }
    }
  }

  .left-side {
    border-right: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .img-container {
      max-width: 500px;
      min-width: 300px;
      margin-right: 40px;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;

    .left-side {
      display: none;
    }

    .right-side {
      padding: 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 460px;
`;
