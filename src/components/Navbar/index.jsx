import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

const Navbar = () => {
  const { isLogin } = useAuth();
  return (
    <nav className='navbar'>
      <main className='navbar__container'>
        <h1 className='navbar__title'>
          <Link to={'/'}>LOGO</Link>
        </h1>
        <ul className='navbar__links'>
          <li>
            <Link to={'/about-us'}>關於我們</Link>
          </li>
          <li>
            <Link to={'/news'}>最新消息</Link>
          </li>
          <li>
            {isLogin ? (
              <Link to={'/member-center'}>會員中心</Link>
            ) : (
              <Link to={'/login'}>會員登入</Link>
            )}
          </li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
