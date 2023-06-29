import { Nav, List, ListItem, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <StyledNavLink to="/">HOME</StyledNavLink>
        </ListItem>
        <li>
          <StyledNavLink to="/contacts">CONTACTS</StyledNavLink>
        </li>
      </List>
    </Nav>
  );
};
