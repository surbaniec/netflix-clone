import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.svg';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt='Netflix' src={Logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
