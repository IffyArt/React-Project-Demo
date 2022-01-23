import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <main>
        <h1>Main branch h1</h1>
        <h2>Main branch h2</h2>
        <h3>Main branch h3</h3>
        <a href='https://sass-lang.com/'>SASS 官網</a>
      </main>
      <nav>
        <Link to='/about' className='iii'>
          About
        </Link>
      </nav>
    </>
  );
}
export default HomePage;
