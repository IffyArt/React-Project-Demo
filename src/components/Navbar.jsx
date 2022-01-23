import { Link } from 'react-router-dom';

function Navbar() {
  console.log('test');
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'about'}>About</Link>
      <Link to={'news'}>News</Link>
      <Link to={'mjlnjl'}>NotFoundPage</Link>
    </nav>
  );
}

export default Navbar;
