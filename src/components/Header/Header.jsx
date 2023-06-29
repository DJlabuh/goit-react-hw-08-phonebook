import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <div className="container">
      <HeaderContainer>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </HeaderContainer>
    </div>
  );
};
