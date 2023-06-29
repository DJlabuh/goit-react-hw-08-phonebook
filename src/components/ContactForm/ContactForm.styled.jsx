import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 10px;
  background-color: #a03333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #d45757;
  }
`;
