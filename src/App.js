import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:id' element={<NewsDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
