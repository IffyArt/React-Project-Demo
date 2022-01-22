import { useState, useEffect } from 'react';
import { apiTodo } from '../servers';

const AxiosDemo = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const callApi = async () => {
      const { data } = await apiTodo();
      setData(data);
    };
    callApi();
  }, []);

  if (!data) return <>Loading</>;

  return (
    <div>
      <h1>Axios Demo</h1>
      {data.map(({ title, id }) => (
        <div key={id}>
          {id}-{title}
        </div>
      ))}
    </div>
  );
};

export default AxiosDemo;
