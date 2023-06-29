import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Email = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const LogoutButton = styled.button`
  background-color: #a03333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d45757;
  }
`;
