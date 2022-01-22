import { useParams } from 'react-router-dom';

const NewsDetailPage = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1>NewsDetailPage</h1>
      <h1>{params.id}</h1>
    </div>
  );
};

export default NewsDetailPage;
