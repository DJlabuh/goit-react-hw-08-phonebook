import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #b3adad;
  font-weight: bold;

  &.active {
    color: #0088cc;
  }
  &:hover {
    color: #0088cc;
  }
`;
