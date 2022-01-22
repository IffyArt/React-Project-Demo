import { Link, useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NewsDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.table(data);
  return (
    <article>
      <section>
        <h3 className='container__title'>{data.title}</h3>
        <span>{data.body}</span>
      </section>
    </article>
  );
};

export default NewsDetailPage;
