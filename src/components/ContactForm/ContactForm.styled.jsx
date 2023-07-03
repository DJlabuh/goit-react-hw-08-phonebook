import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 10px 13px -7px #000000;
  max-width: 300px;
  margin-top: 10px;
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
  background-color: #0088cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #007ab8;
  }
`;