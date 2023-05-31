import { styled } from 'styled-components';

export const Container = styled.main`
  width: 100Vw;
  height: 100Vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 60px;
  justify-content: center;
  align-items: center;

  .right-side {
    max-width: 100%;
    padding-left: 96px;
    display: flex;
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
    padding: 68px 70px 0;
    border-right: 1px solid #E5E5E5;
    display: flex;
    max-width: 100%;

    .img-container {
      min-width: 400px;
      max-width: 100%;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .left-side {
      display: none;
    }

    .right-side {
      padding-left: 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 460px;
`;


