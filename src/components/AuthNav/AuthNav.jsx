import { AuthNavContainer, NavItem, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavItem>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/login">LogIn</StyledNavLink>
      </NavItem>
    </AuthNavContainer>
  );
};
