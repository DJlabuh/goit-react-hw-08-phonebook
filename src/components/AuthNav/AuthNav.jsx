import { NavLink } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="telegram">
        Profile
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <NavLink to="/register">
            <MenuItem>Register</MenuItem>
          </NavLink>
          <NavLink to="/login">
            <MenuItem>LogIn</MenuItem>
          </NavLink>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
