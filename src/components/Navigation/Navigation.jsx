import React from 'react';

import { Nav, LeftMenu, RightMenu, MenuItem, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <LeftMenu>
        <MenuItem>
          <Link href="/">HOME</Link>
        </MenuItem>
      </LeftMenu>
      <RightMenu>
        <MenuItem>
          <Link href="/signup">SignUp</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/login">LogIn</Link>
        </MenuItem>
      </RightMenu>
    </Nav>
  );
};
