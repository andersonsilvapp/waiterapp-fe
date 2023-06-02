import { styled } from 'styled-components';

export const Container = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 10px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }
`;
