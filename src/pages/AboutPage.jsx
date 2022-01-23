import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <main>
        <h2>Welcome to the AboutPage!</h2>
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
export default AboutPage;
