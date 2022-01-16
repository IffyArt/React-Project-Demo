import HeaderContent from './HeaderContent';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <header className='header'>
      <HeaderLogo />
      <HeaderContent />
    </header>
  );
};

export default Header;
