import { Link } from 'react-router-dom';
import { newsList } from '../lib/fakeData';

function NewsPage() {
  return (
    <>
      <main>
        <h2>NewsPage List</h2>
        <ul>
          {newsList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>
                {id}-{title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <nav>
        <Link to='/about' className='iii'>
          About
        </Link>
      </nav>
    </>
  );
}
export default NewsPage;
