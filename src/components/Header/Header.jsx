import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

import { HeaderContainer } from './Header.styled';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isAuthSelector = state => state.auth.isLoggedIn;
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className="container">
      <HeaderContainer>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </div>
  );
};
