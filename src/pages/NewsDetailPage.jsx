import { useParams } from 'react-router-dom';
import { newsList } from '../lib/fakeData';

function NewsDetailPage() {
  const { id } = useParams();
  const data = newsList.find((element) => element.id === id);

  return (
    <main>
      <h2>{data.title}</h2>
      <span>{data.body}</span>
    </main>
  );
}
export default NewsDetailPage;
