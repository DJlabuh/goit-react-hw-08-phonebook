import { Avatar, Button } from '@chakra-ui/react';
import { MdExitToApp } from 'react-icons/md';
import { UserMenuContainer, Email } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuContainer>
      <Avatar bg="grey" />
      <Email>mango@mail.com</Email>
      <Button
        type="submit"
        size="xs"
        rightIcon={<MdExitToApp />}
        colorScheme="telegram"
        variant="outline"
      >
        LogOut
      </Button>
    </UserMenuContainer>
  );
};
