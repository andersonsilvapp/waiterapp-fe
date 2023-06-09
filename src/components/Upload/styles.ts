import { styled } from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 110px;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  > img {
    object-fit: cover;
  }

  &:hover {
    filter: opacity(0.8);
    transition: filter 0.3s;
  }

  input[type='file'] {
    display: none;
  }

  & > label {
    cursor: pointer;
  }

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #fff;
    padding: 6px;
    background: rgba(255, 255, 255, 0.2);

    &:hover {
      filter: opacity(0.8);
      transition: filter 0.3s;
    }
  }
`;
