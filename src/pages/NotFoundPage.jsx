import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <main>
        <h2>Welcome to the NotFoundPage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/about' className='iii'>
          About
        </Link>
      </nav>
    </>
  );
}
export default NotFoundPage;
