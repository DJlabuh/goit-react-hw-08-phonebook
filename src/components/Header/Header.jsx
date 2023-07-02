import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

import { HeaderContainer } from './Header.styled';

import { useAuth } from 'components/hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container">
      <HeaderContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </div>
  );
};
