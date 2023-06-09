import { styled } from 'styled-components';

export const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 17px 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  background: transparent;
  position: relative;

  i {
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 20px;
  }

  input {
    border: none;
    background: transparent;
    width: 80%;
  }

  input:focus-visible {
    outline: none;
  }
`;
