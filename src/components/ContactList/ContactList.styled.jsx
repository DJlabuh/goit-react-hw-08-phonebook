import styled from 'styled-components';

export const ContactsUl = styled.ul`
  list-style: none;
  padding: 0 20px 0 0px;
`;

export const ContactsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 6px;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
  width: 360px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:nth-child(2n + 1) {
    background-color: #e9e9e9;
  }

  @media (max-width: 410px) {
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
