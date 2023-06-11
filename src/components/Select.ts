import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: none;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  color: #ababab;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
