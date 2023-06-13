import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 40px 40px 0px;

  & > header > h1 {
    font-size: 28px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey[900]};
    margin-bottom: 25px;
  }
`;

export const AddProduct = styled.div`
  padding: 60px;
  margin-bottom: 60px;
  background: #fff;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 10px 40px rgba(45, 45, 45, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;

  .button-container {
    width: 166px;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const InputGroup = styled.div`
  max-width: 50%;
  min-width: 30%;
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .add-ingredients {
    width: 100%;
    display: flex;
    gap: 50px;
  }

  .add-container {
  }
`;
