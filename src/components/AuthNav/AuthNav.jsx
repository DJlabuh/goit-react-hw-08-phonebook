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
          <MenuItem>
            <NavLink to="/register">Register</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/login">LogIn</NavLink>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
