import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './screens/HomeScreen';
import NewsPage from './screens/NewsScreen';
import NewsDetailPage from './screens/NewsScreen/NewsDetailPage';
import PostPage from './screens/PostScreen';
import PostDetailPage from './screens/PostScreen/PostDetailPage';
import NotFound from './screens/NotFoundScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='news' element={<NewsPage />}>
            <Route path=':id' element={<NewsDetailPage />} />
          </Route>
          <Route path='posts' element={<PostPage />} />
          <Route path='posts/:id' element={<PostDetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
