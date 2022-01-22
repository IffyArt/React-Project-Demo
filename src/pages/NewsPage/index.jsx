import { Link } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NewsPage = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.table(data);
  return (
    <article>
      <section>
        <h3 className='container__title'>最新消息列表</h3>
        <ul className='news-list'>
          {data.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/news/${id}`}>
                {id}-{title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default NewsPage;
