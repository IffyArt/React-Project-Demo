// 非常強大的函式庫 https://swr.vercel.app/zh-CN/docs/getting-started
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWRDemo = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/todos',
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1>SWR Demo</h1>
      {data.map(({ title, id }) => (
        <div key={id}>
          {id}-{title}
        </div>
      ))}
    </div>
  );
};

export default SWRDemo;
