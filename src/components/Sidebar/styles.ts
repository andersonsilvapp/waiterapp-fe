import { styled } from 'styled-components';

export const Container = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 80px;
  background: ${({ theme }) => theme.colors.primary};

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav > header {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  ul {
    list-style: none;
  }
`;
