import { UserMenuContainer, Email, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuContainer>
      <Email>mango@mail.com</Email>
      <LogoutButton>Logout</LogoutButton>
    </UserMenuContainer>
  );
};
