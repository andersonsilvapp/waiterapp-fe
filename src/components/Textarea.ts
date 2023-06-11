import styled from 'styled-components';

export default styled.textarea`
  width: 100%;
  border: none;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 12px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  resize: none;

  &::placeholder {
    color: #ababab;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
