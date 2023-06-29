import styled from 'styled-components';

export const ContactsUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: ${props => (props.dark ? '#f5f5f5' : 'inherit')};
  width: 600px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const ContactsText = styled.p`
  margin: 0;
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const ContactsButton = styled.button`
  padding: 5px 10px;
  background-color: #a03333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d45757;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
