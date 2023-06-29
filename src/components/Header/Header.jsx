import React from 'react';
import { Navigation } from 'components/Navigation';

import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
    </HeaderContainer>
  );
};
