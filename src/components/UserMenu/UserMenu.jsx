import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operationsAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Avatar, Button } from '@chakra-ui/react';
import { MdExitToApp } from 'react-icons/md';
import { UserMenuContainer, Email } from './UserMenu.styled';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectorsAuth';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .then(() => {
        toast.info('Session ended. Exit successful.');
      })
      .catch(() => {
        toast.error('Error while debugging. Please try again.');
      });
  };

  return (
    <UserMenuContainer>
      <Avatar bg="grey" width="25px" height="25px" />
      <Email>{user.email}</Email>
      <Button
        type="submit"
        onClick={handleLogOut}
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
