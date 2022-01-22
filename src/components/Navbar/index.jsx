import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <main className='navbar__container'>
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/news'}>最新消息</Link>
          </li>
          <li>
            <Link to={`/news/fs`}>最新消息路由一</Link>
          </li>
          <li>
            <Link to={'/posts'}>貼文</Link>
          </li>
          <li>
            <Link to={`/posts/fs`}>貼文路由一</Link>
          </li>
          <li>
            <Link to={'/sss'}>找不到畫面</Link>
          </li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
