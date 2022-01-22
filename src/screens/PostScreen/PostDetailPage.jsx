import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1>PostDetailPage</h1>
      <h1>{params.id}</h1>
    </div>
  );
};

export default PostDetailPage;
