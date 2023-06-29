import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #b3adad;
  font-weight: bold;

  &.active {
    color: #a03333;
  }
`;
